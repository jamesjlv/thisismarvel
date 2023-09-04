export type DetailsRouteParams = {
  url: string;
  type: "characters" | "events" | "comics" | "series";
  title: string;
  subtitle: string;
  interesting?: Interesting[] | null;
  description: string;
  id?: string;
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

export interface TimelineProps {
  year: number | string;
  title: string;
}
