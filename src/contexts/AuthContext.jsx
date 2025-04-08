import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  email: "",
  password: "",
  err: null,
};

const fakeUsers = [
  { id: 1, email: "mohammad@gmail.com", password: "12345678" },
];

function reducer(state, action) {
  switch (action.type) {
    case "auth/chackedInfo":
      if (
        action.payload.email === fakeUsers[0].email &&
        action.payload.password === fakeUsers[0].password
      ) {
        return {
          ...state,
          isAuthenticated: true,
          email: action.payload.email,
          password: action.payload.password,
        };
      } else {
        return {
          ...state,
          err: "there is no user with this information in userList.",
        };
      }
    case "auth/logout":
      return initialState;
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [{ isAuthenticated, email, password, err }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, email, password, err, dispatch }}
    >
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

export { AuthProvider, useAuth };
