import React, { createContext, useContext, useEffect, useState } from "react";
import { MarvelContextData, MarvelProviderProps } from "./props";
import {
  manufactureRemoteGetCharacters,
  manufactureRemoteGetComics,
} from "@/main";
import {
  GetCharacterServiceNamespace,
  GetComicsServiceNamespace,
} from "@/domain";

export const MarvelContext = createContext<MarvelContextData>(
  {} as MarvelContextData,
);

export const MarvelProvider = ({ children }: MarvelProviderProps) => {
  const [characters, setCharacters] =
    useState<GetCharacterServiceNamespace.Model["data"]>();
  const [comics, setComics] =
    useState<GetComicsServiceNamespace.Model["data"]>();

  const handleGetMarvelData = async () => {
    try {
      const promises = [
        manufactureRemoteGetCharacters().exec(),
        manufactureRemoteGetComics().exec(),
      ];

      const [charactersResponse, comicsResponse] =
        await Promise.allSettled(promises);

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
    } catch (error) {}
  };

  useEffect(() => {
    handleGetMarvelData();
  }, []);

  return (
    <MarvelContext.Provider value={{ characters, handleGetMarvelData, comics }}>
      {children}
    </MarvelContext.Provider>
  );
};

export const useMarvel = (): MarvelContextData => useContext(MarvelContext);
