"use client";

import React from "react";
import { SETTINGS_QUERYResult } from "../../sanity.types";

// Extract the settings type from the union
type SanitySettings = Extract<SETTINGS_QUERYResult, { _type: 'settings' }>;

// Type for individual color values
type SanityColor = NonNullable<
  NonNullable<SanitySettings['colorScheme']>[keyof NonNullable<SanitySettings['colorScheme']>
  ]>;

const defaultColor: SanityColor = {
  _type: 'color',
  hex: '#ffffff',
  alpha: 1,
  hsl: { _type: 'hslaColor', h: 0, s: 0, l: 1, a: 1 },
  hsv: { _type: 'hsvaColor', h: 0, s: 0, v: 1, a: 1 },
  rgb: { _type: 'rgbaColor', r: 255, g: 255, b: 255, a: 1 }
};

interface ValidSettings {
  storeName: string;
  logo: string;
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

export const validateSettings = (data: SETTINGS_QUERYResult): ValidSettings => {
  const settings = data?._type === 'settings' ? data : null;
  
  return {
    storeName: settings?.storeName || 'Default Store',
    logo: settings?.logo?.asset?._ref || '',
    spaceBetweenSections: settings?.spaceBetweenSections || 24,
    colorScheme: {
      primary: settings?.colorScheme?.primary || defaultColor,
      secondary: settings?.colorScheme?.secondary || defaultColor,
      error: settings?.colorScheme?.error || defaultColor,
      success: settings?.colorScheme?.success || defaultColor,
      warning: settings?.colorScheme?.warning || defaultColor,
      button: settings?.colorScheme?.button || defaultColor,
      border: settings?.colorScheme?.border || defaultColor,
      cardBackground: settings?.colorScheme?.cardBackground || defaultColor,
      text: settings?.colorScheme?.text || defaultColor,
      background: settings?.colorScheme?.background || defaultColor,
      foreground: settings?.colorScheme?.foreground || defaultColor,
    }
  };
};

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