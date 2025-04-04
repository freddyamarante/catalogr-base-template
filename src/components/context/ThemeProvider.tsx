"use client";

import React from "react";
import { SETTINGS_QUERYResult } from "../../../sanity.types";

// Extract the settings type from the union
type SanitySettings = Extract<SETTINGS_QUERYResult, { _type: 'settings' }>;

// Type for individual color values
export type SanityColor = NonNullable<
  NonNullable<SanitySettings['colorScheme']>[keyof NonNullable<SanitySettings['colorScheme']>]
>;


export interface ValidSettings {
  storeName: string;
  logo?: string;
  spaceBetweenSections: number;
  colorScheme: {
    primary: SanityColor;
    secondary: SanityColor;
    error: SanityColor;
    success: SanityColor;
    warning: SanityColor;
    button: SanityColor;
    border: SanityColor;
    cardBackground: SanityColor;
    text: SanityColor;
    background: SanityColor;
    foreground: SanityColor;
  };
}

interface ThemeProviderProps {
  children: React.ReactNode;
  settings: ValidSettings;
}

const ThemeVariables = ({ settings }: { settings: ValidSettings }) => (
  <style jsx global>{`
    :root {
      --color-primary: ${settings.colorScheme.primary.hex};
      --color-secondary: ${settings.colorScheme.secondary.hex};
      --color-error: ${settings.colorScheme.error.hex};
      --color-success: ${settings.colorScheme.success.hex};
      --color-warning: ${settings.colorScheme.warning.hex};
      --color-border: ${settings.colorScheme.border.hex};
      --color-card-background: ${settings.colorScheme.cardBackground.hex};
      --color-text: ${settings.colorScheme.text.hex};
      --color-background: ${settings.colorScheme.background.hex};
      --color-foreground: ${settings.colorScheme.foreground.hex};
      --space-between-sections: ${settings.spaceBetweenSections}px;
    }
  `}</style>
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  settings 
}) => (
  <>
    <ThemeVariables settings={settings} />
    <div style={{ 
      "--space-between-sections": `${settings.spaceBetweenSections}px` 
    } as React.CSSProperties}>
      {children}
    </div>
  </>
);