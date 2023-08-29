import React from "react";
import { LoginScreen } from "@/presentation";
import { manufactureAuthenticationSimpleLogin } from "@/main/services";

export const ManufactureLoginScreen: React.FC = () => (
  <LoginScreen
    handleUserSimpleAuthentication={manufactureAuthenticationSimpleLogin()}
  />
);
