import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  handleLogin: (token) => {},
  handleLogout: () => {},
});

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  return <div></div>;
};

export default AuthProvider;
