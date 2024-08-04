import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({
  user: null,
  handleLogin: (token) => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (token) => {
    const decodeToken = jwtDecode(token);
    localStorage.setItem("userId", decodeToken.sub);
    localStorage.setItem("userRole", decodeToken.roles.join(", "));
    localStorage.setItem("token", token);
    console.log(decodeToken);
    setUser(decodeToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setUser(null);
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
