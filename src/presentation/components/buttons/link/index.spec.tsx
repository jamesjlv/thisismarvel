import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { LinkButton } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { LinkButtonProps } from "./props";
import faker from "@faker-js/faker";

const makeSut = (props: LinkButtonProps) => {
  return render(<LinkButton {...props} />, { wrapper: AppThemeProvider });
};

const buttonLinkText = faker.random.words();
const handlePress = jest.fn();

describe("LinkButton component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut({
      text: buttonLinkText,
      onPress: handlePress,
    });
    const linkButtonComponent = getByTestId("LinkButtonComponent");

    expect(linkButtonComponent.children[0]).toBeTruthy();
  });

  it("Should be able to press", () => {
    const { getByTestId } = makeSut({
      text: buttonLinkText,
      onPress: handlePress,
    });

    const linkButton = getByTestId("LinkButtonComponent");

    fireEvent.press(linkButton);

    expect(handlePress).toBeCalled();
  });

  it("Should render the correct title", () => {
    const { getByTestId } = makeSut({
      text: buttonLinkText,
      onPress: handlePress,
    });

    const linkTitle = getByTestId("LinkButtonComponent-Title");

    expect(linkTitle.children[0]).toBe(buttonLinkText);
  });
});
