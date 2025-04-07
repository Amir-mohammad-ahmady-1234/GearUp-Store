import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of the AuthProvider.");
  return context;
}

const initialState = {
  isAuthenticated: false,
};

export { AuthProvider, useAuth };
