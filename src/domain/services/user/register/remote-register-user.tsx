import { IUserDataTransferObjectModel, IUserModel } from "@/domain";

interface ISetRegisterUserService {
  exec: (params: SetRegisterUser.Params) => Promise<SetRegisterUser.Model>;
}

export namespace SetRegisterUser {
  export type Params = IUserDataTransferObjectModel;

  export type Model = IUserModel;

  export type Interface = ISetRegisterUserService;
}
