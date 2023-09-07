import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { Button } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { ButtonProps } from "./props";
import faker from "@faker-js/faker";

const makeSut = (props: ButtonProps) => {
  return render(<Button {...props} />, { wrapper: AppThemeProvider });
};

const buttonLinkText = faker.random.words();
const handlePress = jest.fn();

const imageSource =
  "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg";
describe("Button component", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      elements: {
        containerProps: {
          source: require("../../../../assets/images/ButtonBackground.png"),
        },
      },
    });
    const buttonPrimary = getByTestId("ButtonComponent-Primary");

    expect(buttonPrimary.children).toBeTruthy();
  });

  it("Should render primary loading", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      loading: true,
    });
    const buttonPrimaryLoading = getByTestId("ButtonComponent-PrimaryLoading");

    expect(buttonPrimaryLoading.children).toBeTruthy();
  });

  it("Should render primary text", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
    });
    const buttonPrimaryText = getByTestId("ButtonComponent-PrimaryText");

    expect(buttonPrimaryText.children[0]).toBe(buttonLinkText);
  });

  it("Should render secondary style", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      types: "secondary",
    });

    const secondaryButton = getByTestId("ButtonComponent-Secondary");

    expect(secondaryButton.children).toBeTruthy();
  });

  it("Should render secondary style loading", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      types: "secondary",
      loading: true,
    });

    const secondaryButtonLoading = getByTestId(
      "ButtonComponent-SecondaryLoading",
    );

    expect(secondaryButtonLoading.children).toBeTruthy();
  });

  it("Should render secondary style", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      types: "third",
    });

    const secondaryButton = getByTestId("ButtonComponent-Third");

    expect(secondaryButton.children).toBeTruthy();
  });

  it("Should render secondary style", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      types: "third",
    });

    const secondaryButton = getByTestId("ButtonComponent-Third");

    expect(secondaryButton.children).toBeTruthy();
  });
  it("Should render secondary text", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      types: "third",
    });

    const secondaryButtonText = getByTestId("ButtonComponent-ThirdText");

    expect(secondaryButtonText.children[0]).toBe(buttonLinkText);
  });

  it("Should render secondary style loading", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      types: "third",
      loading: true,
    });

    const secondaryButtonLoading = getByTestId("ButtonComponent-ThirdLoading");

    expect(secondaryButtonLoading.children).toBeTruthy();
  });

  it("Should render Without title passed", () => {
    const { getByTestId } = makeSut({} as unknown as ButtonProps);

    const primaryButtonText = getByTestId("ButtonComponent-PrimaryText");

    expect(primaryButtonText.children[0]).toBe("Button");
  });

  it("Should be able to press", () => {
    const { getByTestId } = makeSut({
      title: buttonLinkText,
      onPress: handlePress,
    });

    const primaryButton = getByTestId("ButtonComponent-Primary");
    fireEvent.press(primaryButton);
    expect(handlePress).toBeCalled();
  });
});
