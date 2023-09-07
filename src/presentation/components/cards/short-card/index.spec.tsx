import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react-native";
import { ShortCardInfo } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { ShortCardInfoProps } from "./props";
import faker from "@faker-js/faker";

const makeSut = (props: ShortCardInfoProps) => {
  return render(<ShortCardInfo {...props} />, { wrapper: AppThemeProvider });
};

const mockHandleNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: () => mockHandleNavigate() }),
}));

const props = {
  url: faker.internet.url(),
  title: faker.random.word(),
  type: faker.random.arrayElement(["events", "characters", "series", "comics"]),
  data: {
    id: faker.datatype.number(),
    title: faker.random.word(),
    subtitle: "Marvel",
    interesting: [
      { title: "Histórias", qtd: faker.datatype.number() },
      { title: "Eventos", qtd: faker.datatype.number() },
      { title: "Séries", qtd: faker.datatype.number() },
      { title: "Quadrinhos", qtd: faker.datatype.number() },
    ],
  },
  id: faker.datatype.uuid(),
} as unknown as ShortCardInfoProps;

const imageNotAvailableUrl =
  "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg";

describe("ShortCard component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut(props);
    const shortCardInfoComponent = getByTestId("ShortCardInfoComponent");
    expect(shortCardInfoComponent.children).toBeTruthy();
  });

  it("Should be able to press and redirect", () => {
    const { getByTestId } = makeSut(props);
    const shortCardInfoComponentButton = getByTestId("ShortCardInfoComponent");
    fireEvent.press(shortCardInfoComponentButton);

    expect(mockHandleNavigate).toBeCalled();
  });

  it("Should render image default when not available", () => {
    const { getByTestId } = makeSut({ ...props, url: "image_not_available" });
    const image = getByTestId("ShortCardInfoComponent-Image");
    expect(image.props.source.uri).toBe(imageNotAvailableUrl);
  });

  it("Should render activity indicator when is loading", () => {
    const { getByTestId } = makeSut({ ...props, url: "image_not_available" });
    const loading = getByTestId("ShortCardInfoComponent-ActivityIndicator");
    expect(loading.children).toBeTruthy();
  });

  it("Should render activity title when image finish loading", () => {
    const { getByTestId } = makeSut({ ...props, url: "image_not_available" });

    const image = getByTestId("ShortCardInfoComponent-Image");

    act(() => {
      image.props.onLoadEnd();
    });

    const title = getByTestId("ShortCardInfoComponent-Title");

    expect(title.children[0]).toBe(props.title);
  });

  it("Should render card even wihout title", () => {
    const { getByTestId } = makeSut({
      ...props,
      url: "image_not_available",
      title: undefined,
    } as unknown as ShortCardInfoProps);

    const image = getByTestId("ShortCardInfoComponent-Image");

    act(() => {
      image.props.onLoadEnd();
    });

    const title = getByTestId("ShortCardInfoComponent-Title");

    expect(title.children[0]).toBe("Card Title");
  });
});
