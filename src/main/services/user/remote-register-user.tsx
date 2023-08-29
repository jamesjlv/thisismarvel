import { SetRemoteRegisterUserService } from "@/data";
import { manufactureDatabaseApi } from "@/main/factories/database/database-factory";

export const manufactureRegisterUser = (): SetRemoteRegisterUserService =>
  new SetRemoteRegisterUserService(manufactureDatabaseApi());
