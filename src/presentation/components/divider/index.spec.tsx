import React from "react";
import { cleanup, render } from "@testing-library/react-native";
import { Divider } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { DividerProps } from "./props";

const makeSut = (props: DividerProps) => {
  return render(<Divider {...props} />, { wrapper: AppThemeProvider });
};

const text = "Divider";

describe("Divider Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("Should render", () => {
    const { getByTestId } = makeSut({ text });

    const dividerComponent = getByTestId("DividerComponent");
    expect(dividerComponent.children[0]).toBeTruthy();
  });

  it("Should render text between lines", () => {
    const { getByTestId } = makeSut({ text });

    const dividerText = getByTestId("DividerComponent-TextDivider");
    expect(dividerText.children[0]).toBe(text);
  });

  it("Should render wihout a text", () => {
    const { getByTestId } = makeSut({} as DividerProps);

    const dividerText = getByTestId("DividerComponent-TextDivider");
    expect(dividerText.children[0]).toBeUndefined();
  });
});
