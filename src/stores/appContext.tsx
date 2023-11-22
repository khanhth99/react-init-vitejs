// src/context/AppContext.tsx

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  userData: any;
}

type Action = { type: string; payload?: any };

const initialState: AppState = {
  userData: null,
};

// Create context
const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

// Define your reducer function
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'UPDATE_USERDATA':
      return { ...state, userData: action.payload };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
};

// Create a context provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

// Create a custom hook to access the context values
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
