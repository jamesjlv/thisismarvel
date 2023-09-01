import React from "react";
import { PasswordRecoveryScreen } from "@/presentation";
import { manufactureRemotePasswordRecoveryService } from "@/main/services";

export const ManufacturePasswordRecoveryScreen: React.FC = () => (
  <PasswordRecoveryScreen
    handleUpdatePassword={manufactureRemotePasswordRecoveryService()}
  />
);
