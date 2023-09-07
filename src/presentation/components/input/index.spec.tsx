import React from "react";
import "@testing-library/jest-native/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { Input } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { InputProps } from "./props";

const makeSut = (props: InputProps) => {
  return render(<Input {...props} />, {
    wrapper: AppThemeProvider,
  });
};

describe("Timeline component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut({ placeHolder: "This is a placeholder" });
    const inputComponent = getByTestId("InputComponent");

    expect(inputComponent.children).toBeTruthy();
  });

  it("Should be able to write", () => {
    const handleTextChange = jest.fn();
    const text = "This is the new text";
    const { getByTestId, getByDisplayValue } = makeSut({
      placeHolder: "This is a placeholder",
      onChangeText: handleTextChange,
    });
    const inputText = getByTestId("InputComponent-InputText");
    fireEvent.changeText(inputText, text);
    expect(handleTextChange).toBeCalledWith(text);
  });

  it("Should render error message when has an error", () => {
    const errorMessage = "not working";
    const { getByTestId } = makeSut({
      placeHolder: "This is a placeholder",
      hasError: true,
      errorMessage,
    });
    const errorMessageComponent = getByTestId("InputComponent-ErrorMessage");
    expect(errorMessageComponent.children[0]).toBe(errorMessage);
  });

  it("Should render password eye icon", () => {
    const { getByTestId } = makeSut({
      placeHolder: "This is a placeholder",
      isPassword: true,
      secureTextEntry: true,
    });
    const passwordIcon = getByTestId("InputComponent-PasswordIcon");
    expect(passwordIcon.children[0].type().props["data-file-name"]).toBe(
      "SvgEyeOutline",
    );
    fireEvent.press(passwordIcon);
    expect(passwordIcon.children[0].type().props["data-file-name"]).toBe(
      "SvgEye",
    );
  });

  it("Should render a title", () => {
    const title = "This is a title";
    const { getByTestId } = makeSut({
      placeHolder: "This is a placeholder",
      title,
    });
    const inputTitle = getByTestId("InputComponent-Title");
    expect(inputTitle.children[0]).toBe(title);
  });

  it("Should render an icon", () => {
    const iconName = "Alien";
    const { getByTestId } = makeSut({
      placeHolder: "This is a placeholder",
      iconName,
    });
    const inputIcon = getByTestId("InputComponent-Icon");
    expect(inputIcon.children[0].type().props["data-file-name"]).toBe(
      "Svg" + iconName,
    );
  });
});
