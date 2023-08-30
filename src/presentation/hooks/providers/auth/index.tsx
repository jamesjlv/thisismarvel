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

  const handleUpdateToken = async ({ token }: HandleUpdateTokenProps) => {
    try {
      const mode = authData?.[0]?.token
        ? UpdateMode.Modified
        : UpdateMode.Never;

      realm.write(() => realm.create("Auth", { token, _id: "1" }, mode));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleLogoff = async () => {
    try {
      realm.write(() => {
        realm.delete(authData);
      });
    } catch (error) {}
  };

  const handleUpdateProfile = async ({ name, email }: IUserRepositoryModel) => {
    try {
      const mode = userData?.[0]?.name ? UpdateMode.Modified : UpdateMode.Never;

      realm.write(() => realm.create("User", { name, email, _id: "1" }, mode));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (authData?.[0]?.token) {
      setToken(authData?.[0]?.token);
    }
  }, [authData]);

  useEffect(() => {
    if (userData?.[0]?.name) {
      setProfile(userData?.[0]);
    }
  }, [userData]);

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
