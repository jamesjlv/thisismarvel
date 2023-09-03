export type DetailsRouteParams = {
  url: string;
  type: "characters" | "events" | "comics" | "series";
  title: string;
  subtitle: string;
  interesting?: Interesting[] | null;
  description: string;
};
export interface DetailsProps {
  title: string;
  subtitle: string;
  interesting?: Interesting[] | null;
}
export interface Interesting {
  title: string;
  qtd: number;
}
