import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'client', 'organization', 'volunteer', 'admin'

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedUserType = localStorage.getItem("userType");

    if (savedUser && savedUserType) {
      setUser(JSON.parse(savedUser));
      setUserType(savedUserType);
    }
  }, []);

  const login = (userData, type) => {
    setUser(userData);
    setUserType(type);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userType", type);
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
  };

  const value = {
    user,
    userType,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
