import React from "react";
import { OneTimeCodePasswordScreen } from "@/presentation";
import { manufactureOTPCodeVerify } from "@/main/services";

export const ManufactureOneTimeCodePasswordScreen: React.FC = () => (
  <OneTimeCodePasswordScreen handleVerifyOTP={manufactureOTPCodeVerify()} />
);
