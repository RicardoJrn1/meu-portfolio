"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  isLoaded: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSetUserName = (name: string) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, setUserName: handleSetUserName, isLoaded }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}