import React from "react";
import { cleanup, render } from "@testing-library/react-native";
import { ButtonIcon } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { ButtonIconProps } from "./props";

const makeSut = (props: ButtonIconProps) => {
  return render(<ButtonIcon {...props} />, { wrapper: AppThemeProvider });
};

const handlePress = jest.fn();

describe("ButtonIcon component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut({ onPress: handlePress });
    const buttonIconComponent = getByTestId("ButtonIconComponent");
    expect(buttonIconComponent.children[0]).toBeTruthy();
  });
});
