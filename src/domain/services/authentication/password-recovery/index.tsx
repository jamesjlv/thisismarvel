import {
  IPasswordRecoveryDataTransferObjectModel,
  IPasswordRecoveryModel,
} from "@/domain/models";

interface IRemotePasswordRecoveryService {
  exec: ({
    confirmPassword,
    password,
  }: RemotePasswordRecoveryServiveNamespace.Params) => Promise<RemotePasswordRecoveryServiveNamespace.Model>;
}

export namespace RemotePasswordRecoveryServiveNamespace {
  export type Params = IPasswordRecoveryDataTransferObjectModel;
  export type Model = IPasswordRecoveryModel;
  export type Interface = IRemotePasswordRecoveryService;
}
