import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const Store = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };

  return <Store.Provider value={store}>{children}</Store.Provider>;
};

export const GlobalConsumer = Store.Consumer;
