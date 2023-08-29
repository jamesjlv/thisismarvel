import { GetRemoteAuthenticationSimpleLoginService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories/database/database-factory";

export const manufactureAuthenticationSimpleLogin =
  (): GetRemoteAuthenticationSimpleLoginService =>
    new GetRemoteAuthenticationSimpleLoginService(manufactureDatabaseApi());
