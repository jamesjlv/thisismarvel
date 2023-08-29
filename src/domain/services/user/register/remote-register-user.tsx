import { IUserDataTransferObjectModel, IUserModel } from "@/domain";

interface ISetRegisterUserService {
  exec: (
    params: SetRegisterUserNamespace.Params,
  ) => Promise<SetRegisterUserNamespace.Model>;
}

export namespace SetRegisterUserNamespace {
  export type Params = IUserDataTransferObjectModel;

  export type Model = IUserModel;

  export type Interface = ISetRegisterUserService;
}
