declare module "react-native-config" {
  interface Env {
    MARVEL_API_PRIVATE: string;
    MARVEL_API_PUBLIC: string;
  }

  const Config: Env;

  export default Config;
}
