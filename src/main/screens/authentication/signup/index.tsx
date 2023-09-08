import React from "react";
import { SignUpScreen } from "@/presentation";
import { manufactureRegisterUser } from "@/main/services/user/remote-register-user";

export const ManufactureSignUpScreen: React.FC = () => {
  return (
    <SignUpScreen handleCreateNewUserAccount={manufactureRegisterUser()} />
  );
};
