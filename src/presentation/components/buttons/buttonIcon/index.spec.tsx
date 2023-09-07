import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { ButtonIcon } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { ButtonIconProps } from "./props";
import faker from "@faker-js/faker";

const makeSut = (props: ButtonIconProps) => {
  return render(<ButtonIcon {...props} />, { wrapper: AppThemeProvider });
};

const buttonLinkText = faker.random.words();
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
