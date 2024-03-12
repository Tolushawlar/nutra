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
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [cart, setCart] = useState<any>({
    total: 0,
  });

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext!);
