import { GetRemoteOneTimePasswordVerifyService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories";

export const manufactureOTPCodeVerify =
  (): GetRemoteOneTimePasswordVerifyService =>
    new GetRemoteOneTimePasswordVerifyService(manufactureDatabaseApi());
