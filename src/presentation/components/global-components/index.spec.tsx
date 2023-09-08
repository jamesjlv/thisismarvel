import React from "react";
import { cleanup, render } from "@testing-library/react-native";
import { GlobalComponents } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import faker from "@faker-js/faker";

const makeSut = () => {
  return render(<GlobalComponents />, { wrapper: AppThemeProvider });
};

let mockAlertData = { message: faker.random.words() } as { message?: string };

jest.mock("@/presentation/hooks/methods/alert", () => ({
  useAlert: () => ({
    alertData: mockAlertData,
  }),
}));

describe("Global components", () => {
  beforeEach(() => {
    cleanup();
    mockAlertData = { message: faker.random.words() };
  });

  it("Should render", () => {
    const { getByTestId, root } = makeSut();

    const alertRendered = getByTestId("AlertComponent");

    expect(alertRendered.children).toBeTruthy();
  });

  it("Should not render any alert", async () => {
    mockAlertData = { message: undefined };
    const { queryByTestId } = makeSut();

    const alertComponent = await queryByTestId("AlertComponent");
    expect(alertComponent?.children).toBeUndefined();
  });
});
