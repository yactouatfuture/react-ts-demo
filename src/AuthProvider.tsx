import React, { createContext, useState } from 'react';
import ReactNodeProps from './interfaces/ReactNodeProps';

interface AuthInfo {
    // we tell Typescript that this can be one of the 2 types
    userData: null | UserData;
}

interface AuthContextValues {
    authInfo: AuthInfo;
    isAdmin: boolean;
    isAuthenticated: boolean;
    setAuthInfo: (authInfo: AuthInfo) => void 
}

/**
 * when using Typescript, you need to specify the values that the Provider will hold on context creation,
 * using undefined here is only for initialization logic
 */
export const AuthContext = createContext<AuthContextValues|undefined>(undefined);
const Provider = AuthContext.Provider;

interface UserData {
    // neat way to restrict the possible roles
    role: "USER" | "ADMIN";
}

// we're using our convenient interface to specify the props we want
export const AuthProvider = ({children}: ReactNodeProps) => {

  /**
   * passing generic types to our `useState` declaration to enforce what the state can be
   */
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
      userData: null
  });  

  const isAuthenticated = authInfo.userData !== null;
  const isAdmin = authInfo.userData?.role === "ADMIN";

  const handleAuthInfoChange = (authInfo: AuthInfo): void => {
    setAuthInfo(authInfo);
  };

  return <Provider value={{
      authInfo,
      isAdmin,
      isAuthenticated,
      setAuthInfo: handleAuthInfoChange
  }}>
      {children}
  </Provider>

};
