import { RealmProvider } from "@realm/react";
import React from "react";
import { UserModel } from "./models/_user/UserModel";
import { AuthModel } from "./models/_auth/AuthModel";
import { RealmDatabaseProps } from "./props";

export const RealDatabaseProvider: React.FC<RealmDatabaseProps> = ({
  children,
}) => {
  return (
    <RealmProvider schema={[UserModel, AuthModel]}>{children}</RealmProvider>
  );
};
