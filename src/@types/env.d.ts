declare module "react-native-config" {
  interface Env {
    MARVEL_API_PRIVATE: string;
    MARVEL_API_PUBLIC: string;
    MASTER_CODE_OTP: number;
    JWT_KEY: string;
  }

  const Config: Env;

  export default Config;
}
