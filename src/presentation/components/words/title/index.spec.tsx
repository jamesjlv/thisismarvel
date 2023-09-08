import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
import { Title } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";

describe("Title component", () => {
  it("Should Render", () => {
    const { getByTestId } = render(<Title text="algo" />, {
      wrapper: AppThemeProvider,
    });
    const TitleComponent = getByTestId("TitleComponent");

    expect(TitleComponent).toBeTruthy();
  });

  it("Should render the correct text", () => {
    const Text = "This is a Text";
    const { getByTestId } = render(<Title text={Text} />, {
      wrapper: AppThemeProvider,
    });
    const TitleComponent = getByTestId("TitleComponent");

    expect(TitleComponent.children[0]).toBe(Text);
  });
});
