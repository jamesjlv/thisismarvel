import Config from "react-native-config";

export type IOneTimePasswordModel = {
  code: number;
  documentId: string;
  isValid: boolean;
};

export enum IOneTimePasswordMasterCodeModal {
  MASTER = Config.MASTER_CODE_OTP,
}

export type IOneTimePasswordDataTransferObjectModel = {
  code: number;
  email: string;
};
