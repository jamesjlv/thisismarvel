export type IUserModel = {
  documentId: string;
  name: string;
  password: string;
  email: string;
  confirmed: boolean;
  created_at: Date;
  updated_at: Date;
};

export type IUserDataTransferObjectModel = {
  name: string;
  password: string;
  email: string;
  confirmed?: boolean;
  created_at: Date;
  updated_at: Date;
};
