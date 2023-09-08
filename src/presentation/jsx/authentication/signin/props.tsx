import { SetRegisterUserNamespace } from "@/domain";

export interface SignInFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInScreenProps {
  handleCreateNewUserAccount: SetRegisterUserNamespace.Interface;
}

export type ErrorData = {
  message: string;
};

export interface InputOutlineMethods {
  /**
   * Requests focus for the given input or view. The exact behavior triggered will depend on the platform and type of view.
   */
  focus: () => void;
  /**
   * Removes focus from an input or view. This is the opposite of focus()
   */
  blur: () => void;
  /**
   * Returns current focus of input.
   */
  isFocused: boolean;
  /**
   * Removes all text from the TextInput.
   */
  clear: () => void;
}
