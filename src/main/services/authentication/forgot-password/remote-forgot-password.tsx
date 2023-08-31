import { SetRemoteForgotPasswordService } from "@/data/services/authentication/forgot-password/remote-forgot-password";
import { manufactureDatabaseApi } from "@/main/factories";

export const manufactureForgotPasswordService =
  (): SetRemoteForgotPasswordService =>
    new SetRemoteForgotPasswordService(manufactureDatabaseApi());
