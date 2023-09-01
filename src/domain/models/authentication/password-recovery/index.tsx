export type IPasswordRecoveryModel = {
  documentId: string;
  email: string;
  password: string;
};

export type IPasswordRecoveryDataTransferObjectModel = {
  password: string;
  confirmPassword: string;
  documentId: string;
};
