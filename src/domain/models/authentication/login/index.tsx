export type ILoginAccountModel = {
  documentId: string;
  email: string;
  password: string;
  name: string;
  itsAllowed: boolean;
};

export type ILoginDataTransferObjectModel = {
  email: string;
  password: string;
};
