import React, { createContext, useContext, useEffect, useState } from "react";
import { MarvelContextData, MarvelProviderProps } from "./props";
import {
  manufactureRemoteGetCharacters,
  manufactureRemoteGetComics,
  manufactureRemoteGetSeries,
  manufactureRemoteGetEvents,
} from "@/main";
import {
  GetCharacterServiceNamespace,
  GetComicsServiceNamespace,
  GetSeriesServiceNamespace,
  GetEventsServiceNamespace,
} from "@/domain";

export const MarvelContext = createContext<MarvelContextData>(
  {} as MarvelContextData,
);

export const MarvelProvider = ({ children }: MarvelProviderProps) => {
  const [characters, setCharacters] =
    useState<GetCharacterServiceNamespace.Model["data"]>();
  const [comics, setComics] =
    useState<GetComicsServiceNamespace.Model["data"]>();
  const [series, setSeries] =
    useState<GetSeriesServiceNamespace.Model["data"]>();
  const [events, setEvents] =
    useState<GetEventsServiceNamespace.Model["data"]>();

  const [isLoading, setIsLoading] = useState(false);

  const handleGetMarvelData = async () => {
    try {
      setIsLoading(true);
      const promises = [
        manufactureRemoteGetCharacters().exec({}),
        manufactureRemoteGetComics().exec({}),
        manufactureRemoteGetSeries().exec({}),
        manufactureRemoteGetEvents().exec({}),
      ];

      const [
        charactersResponse,
        comicsResponse,
        seriesResponse,
        eventsResponse,
      ] = await Promise.allSettled(promises);

      if (charactersResponse.status === "fulfilled") {
        setCharacters(
          charactersResponse.value as GetCharacterServiceNamespace.Model["data"],
        );
      }
      if (comicsResponse.status === "fulfilled") {
        setComics(
          comicsResponse.value as GetComicsServiceNamespace.Model["data"],
        );
      }
      if (seriesResponse.status === "fulfilled") {
        setSeries(
          seriesResponse.value as GetSeriesServiceNamespace.Model["data"],
        );
      }
      if (eventsResponse.status === "fulfilled") {
        setEvents(
          eventsResponse.value as GetEventsServiceNamespace.Model["data"],
        );
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMarvelData();
  }, []);

  return (
    <MarvelContext.Provider
      value={{
        characters,
        handleGetMarvelData,
        comics,
        series,
        events,
        isLoading,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export const useMarvel = (): MarvelContextData => useContext(MarvelContext);
