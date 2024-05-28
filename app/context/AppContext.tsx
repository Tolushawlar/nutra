"use client";
import { createContext, useContext, useState } from "react";

export type AppContextProviderProps = {
  children: React.ReactNode;
};

export interface CartTypes {
  total: number;
}

export interface AppContextType {
  cart: CartTypes;
  setCart: React.Dispatch<React.SetStateAction<CartTypes>>;
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  displayResults: boolean,
  setDisplayResults: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: any;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [cart, setCart] = useState<any>({
    total: 0,
  });
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [displayResults, setDisplayResults] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        searchResults,
        setSearchResults,
        displayResults,
        setDisplayResults,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext!);
