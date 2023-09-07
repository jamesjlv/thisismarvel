import React from "react";
import { cleanup, render } from "@testing-library/react-native";
import { Alert } from "./index";
import { AlertProps } from "./props";
import { AppThemeProvider } from "@/presentation/hooks";
import faker from "@faker-js/faker";

const makeSut = (props: AlertProps) => {
  return render(<Alert {...props} />, { wrapper: AppThemeProvider });
};

describe("Alert component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut({});
    const alertComponent = getByTestId("AlertComponent");

    expect(alertComponent.children).toBeTruthy();
  });

  it("Should render text message", () => {
    const message = faker.random.words();
    const { getByTestId } = makeSut({ message });
    const alertComponentMessage = getByTestId("AlertComponent-Text");
    expect(alertComponentMessage.children[0]).toBe(message);
  });
});
