import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react-native";
import { LongCard } from "./index";
import { AppThemeProvider } from "@/presentation/hooks";
import { LongCardProps } from "./props";
import faker from "@faker-js/faker";

const makeSut = (props: LongCardProps) => {
  return render(<LongCard {...props} />, { wrapper: AppThemeProvider });
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
} as unknown as LongCardProps;

const imageNotAvailableUrl =
  "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg";

describe("LongCard Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render", () => {
    const { getByTestId } = makeSut(props);

    const LongCardComponent = getByTestId("LongCardComponent");

    expect(LongCardComponent.children).toBeTruthy();
  });

  it("Should be able to navigate when is pressed", () => {
    const { getByTestId } = makeSut(props);

    const LongCardComponentButton = getByTestId("LongCardComponent");
    fireEvent.press(LongCardComponentButton);
    expect(mockHandleNavigate).toBeCalled();
  });

  it("Should render even when it is not passed the title or type", () => {
    const { getByTestId } = makeSut({
      ...props,
      title: undefined,
      type: undefined,
    } as unknown as LongCardProps);

    const title = getByTestId("LongCardComponent-Title");

    expect(title.children[0]).toBe("Title");
  });

  it("Should render loading component before image loads", () => {
    const { getByTestId } = makeSut({
      ...props,
      title: undefined,
      type: undefined,
    } as unknown as LongCardProps);

    const loadingComponent = getByTestId("LongCardComponent-Loading");

    expect(loadingComponent.children).toBeTruthy();
  });

  it("Should not render loading component after image loads", () => {
    const { getByTestId } = makeSut({
      ...props,
      title: undefined,
      type: undefined,
    } as unknown as LongCardProps);

    const loadingComponent = getByTestId("LongCardComponent-Loading");

    expect(loadingComponent.children).toBeTruthy();

    const image = getByTestId("LongCardInfoComponent-Image");

    act(() => {
      image.props.onLoadEnd();
    });

    expect(loadingComponent.chidren).not.toBeTruthy();
  });
});
