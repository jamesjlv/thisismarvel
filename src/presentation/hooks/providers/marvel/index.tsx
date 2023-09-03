import React, { createContext, useContext, useEffect, useState } from "react";
import { MarvelContextData, MarvelProviderProps } from "./props";
import { manufactureRemoteGetCharacters } from "@/main";
import { GetCharacterServiceNamespace } from "@/domain";

export const MarvelContext = createContext<MarvelContextData>(
  {} as MarvelContextData,
);

export const MarvelProvider = ({ children }: MarvelProviderProps) => {
  const [characters, setCharacters] =
    useState<GetCharacterServiceNamespace.Model["data"]>();

  const handleGetCharacters = async () => {
    try {
      const response = await manufactureRemoteGetCharacters().exec();
      console.log("responseeee", response);
      setCharacters(response);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return (
    <MarvelContext.Provider value={{ characters, handleGetCharacters }}>
      {children}
    </MarvelContext.Provider>
  );
};

export const useMarvel = (): MarvelContextData => useContext(MarvelContext);
