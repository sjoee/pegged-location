"use client";

import React, { createContext, useContext } from "react";
import useCurrentUser from "../components/hook/use-current-user.hook";

interface AuthContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loggedIn: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logIn: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logOut: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, loggedIn, logIn, logOut] = useCurrentUser();

  return (
    <AuthContext.Provider value={{ user, loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

// // app/context/AuthContext.tsx
// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import WebApp from "@twa-dev/sdk";

// type AuthContextType = {
//   userID: number | null;
//   username: string | null;
//   windowHeight: number;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [windowHeight, setWindowHeight] = useState<number>(0);
//   const [userID, setUserID] = useState<number | null>(null);
//   const [username, setUsername] = useState<string | null>(null);

//   useEffect(() => {
//     // Ensure this code only runs on the client side
//     if (typeof window !== "undefined" && WebApp) {
//       WebApp.isVerticalSwipesEnabled = false;
//       setWindowHeight(WebApp.viewportStableHeight || window.innerHeight);
//       WebApp.ready();

//       // Set Telegram user data
//       const user = WebApp.initDataUnsafe.user;
//       setUserID(user?.id || null);
//       setUsername(user?.username || null);
//     }
//   }, []);

//   const contextValue = {
//     userID,
//     username,
//     windowHeight,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthContextProvider");
//   }
//   return context;
// };
