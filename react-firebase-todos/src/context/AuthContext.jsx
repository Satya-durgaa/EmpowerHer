import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(setUser);
  }, []);

  const value = {
    user,
    login: authService.login,
    signup: authService.signup,
    logout: authService.logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);