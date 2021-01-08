import React, { useContext, useReducer } from "react";
import { ActionsType, AppStateType } from "./actions";
import { initialState, stateReducer } from "./stateReducer";

export const AppContext = React.createContext<{
  state: AppStateType;
  dispatch: React.Dispatch<ActionsType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const contextValue = useContext(AppContext);
  return contextValue;
};

