import {
  IForgotPasswordDataTransferObjectModel,
  IForgotPasswordModel,
} from "@/domain/models";

interface IRemoteForgotPasswordService {
  exec: ({
    email,
  }: RemoteForgotPasswordServiveNamespace.Params) => Promise<RemoteForgotPasswordServiveNamespace.Model>;
}

export namespace RemoteForgotPasswordServiveNamespace {
  export type Params = IForgotPasswordDataTransferObjectModel;
  export type Model = IForgotPasswordModel;
  export type Interface = IRemoteForgotPasswordService;
}
