import React, { useState, Provider } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
}

export default AuthContext;