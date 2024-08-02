import React, { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({
  user: null,
  handleLogin: (token) => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (token) => {
    const decodeToken = jwt_decode(token);
    localStorage.setItem("userId", decodeToken.sub);
    localStorage.setItem("userRole", decodeToken.roles.join(","));
    localStorage.setItem("token", token);
    setUser(decodeToken);
  };

  const handleLogout = (token) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setUser(nullS);
  };
  return (
    <div>
      <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
