import { SetRemotePasswordRecoveryService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories";

export const manufactureRemotePasswordRecoveryService =
  (): SetRemotePasswordRecoveryService =>
    new SetRemotePasswordRecoveryService(manufactureDatabaseApi());
