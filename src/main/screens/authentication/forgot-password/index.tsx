import React from "react";
import { ForgotPasswordScreen } from "@/presentation";
import { manufactureForgotPasswordService } from "@/main/services";

export const ManufactureForgotPasswordScreen: React.FC = () => (
  <ForgotPasswordScreen
    handleSendEmailWithCodeForResetingPassword={manufactureForgotPasswordService()}
  />
);
