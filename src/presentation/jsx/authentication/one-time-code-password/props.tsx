import { RemoteOneTimePasswordNamespace } from "@/domain";

export type OTPRouteParams = {
  email: string;
  code: number;
};

export type OTPScreenParams = {
  handleVerifyOTP: RemoteOneTimePasswordNamespace.Interface;
};
