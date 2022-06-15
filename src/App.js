import React from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

export const AuthContext = React.createContext()

const initialState = {
  isAuthenticated: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isAuthenticated", true);
      return {
        isAuthenticated: true
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// ----------------------------------------------------------------------

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider 
      value={{
        state,
        dispatch
      }}
    >
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
