import Config from "react-native-config";

export type IOneTimePasswordModel = {
  code: string;
};

export enum IOneTimePasswordMasterCodeModal {
  MASTER = Config.MASTER_CODE_OTP,
}
