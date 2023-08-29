import React from "react";
import { SignInScreen } from "@/presentation";
import { manufactureRegisterUser } from "@/main/services/user/remote-register-user";

export const ManufactureSignInScreen: React.FC = () => {
  return (
    <SignInScreen handleCreateNewUserAccount={manufactureRegisterUser()} />
  );
};
