import React, { createContext, useContext, useEffect, useState } from "react";
import { UpdateMode } from "realm";
import { useQuery, useRealm } from "@realm/react";

import { AuthModel } from "@/infra/config/database/realm/models/_auth/AuthModel";
import { UserModel } from "@/infra/config/database/realm/models/_user/UserModel";
import { IUserRepositoryModel } from "@/domain";
import {
  AuthenticationContextData,
  AuthenticationProviderProps,
  HandleUpdateTokenProps,
} from "./props";
import { JWTExpValidator } from "@/shared";

export const AuthContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData,
);

export const AuthProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [profile, setProfile] = useState<AuthenticationContextData["profile"]>(
    {} as AuthenticationContextData["profile"],
  );
  const [token, setToken] = useState<string>("");
  const realm = useRealm();
  const authData = useQuery(AuthModel);
  const userData = useQuery(UserModel);

  const handleUpdateToken = async ({ token, id }: HandleUpdateTokenProps) => {
    try {
      const mode = authData?.[0]?.token
        ? UpdateMode.Modified
        : UpdateMode.Never;

      realm.write(() => realm.create("Auth", { token, _id: id }, mode));
      setToken(token);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleLogoff = async () => {
    try {
      realm.write(() => {
        realm.delete(authData);
      });
      setToken("");
      setProfile({} as AuthenticationContextData["profile"]);
    } catch (error) {}
  };

  const handleUpdateProfile = async ({ name, email }: IUserRepositoryModel) => {
    try {
      const mode = userData?.[0]?.name ? UpdateMode.Modified : UpdateMode.Never;
      realm.write(() => realm.create("User", { name, email, _id: "1" }, mode));
      setProfile({ name, email });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInicialization = async () => {
    try {
      if (authData?.[0]?.token) {
        const isExpired = JWTExpValidator(authData?.[0]?.token);
        if (isExpired) {
          await handleLogoff();
        } else {
          setToken(authData?.[0]?.token);
        }
      }
      if (userData?.[0]?.name) {
        setProfile(userData?.[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleInicialization();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        profile,
        token,
        handleUpdateToken,
        handleLogoff,
        handleUpdateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthHook = (): AuthenticationContextData => {
  return useContext(AuthContext);
};
