export type ILoginAccountModel = {
  documentId: string;
  email: string;
  password: string;
  name: string;
  itsAllowed: boolean;
  token?: string;
};

export type ILoginDataTransferObjectModel = {
  email: string;
  password: string;
};
