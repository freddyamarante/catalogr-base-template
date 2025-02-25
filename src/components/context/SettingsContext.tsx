'use client'

import { createContext, useContext } from "react";
import { SETTINGS_QUERYResult } from "../../../sanity.types";

const SettingsContext = createContext<SETTINGS_QUERYResult | null>(null);

export function SettingsProvider({ 
  children,
  settings 
}: { 
  children: React.ReactNode;
  settings: SETTINGS_QUERYResult;
}) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}