import { GetRemoteAuthenticationSimpleLoginService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories/database/database-factory";
import { EncodeJWT } from "../jwt/remote-encode-token-jwt";

export const manufactureAuthenticationSimpleLogin =
  (): GetRemoteAuthenticationSimpleLoginService =>
    new GetRemoteAuthenticationSimpleLoginService(
      manufactureDatabaseApi(),
      new EncodeJWT(),
    );
