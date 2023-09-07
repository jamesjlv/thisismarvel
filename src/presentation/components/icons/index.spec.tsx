import React from "react";
import "@testing-library/jest-native/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { Icons } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { IconProps } from "./props";

const makeSut = (props: IconProps) => {
  return render(<Icons {...props} />, {
    wrapper: AppThemeProvider,
  });
};

describe("IconComponent", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut({
      iconName: "Antihero",
      size: "small",
      color: "title",
    });

    const iconComponent = getByTestId("IconComponent");

    expect(iconComponent.children[0]).toBeTruthy();
  });

  it("Should be able to press", () => {
    const handlePress = jest.fn();
    const { getByTestId } = makeSut({
      iconName: "Antihero",
      onPress: handlePress,
      size: "small",
      color: "title",
    });

    const iconComponentButton = getByTestId("IconComponent");
    expect(handlePress).not.toBeCalled();
    fireEvent.press(iconComponentButton);
    expect(handlePress).toBeCalled();
  });
});
