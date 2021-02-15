import React, { useReducer, createContext } from "react";

const stateContext = createContext();

const { Provider } = stateContext;

const StateProvider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { stateContext, StateProvider };
