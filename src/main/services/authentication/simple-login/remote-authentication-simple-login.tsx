import { GetRemoteAuthenticationSimpleLoginService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories/database/database-factory";
import { manufactureEncodeJWT } from "../jwt/remote-encode-token-jwt";

export const manufactureAuthenticationSimpleLogin =
  (): GetRemoteAuthenticationSimpleLoginService =>
    new GetRemoteAuthenticationSimpleLoginService(
      manufactureDatabaseApi(),
      manufactureEncodeJWT(),
    );
