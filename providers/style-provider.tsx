'use client';

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { Styles } from '@/constants';
import ShadcnIcon from '@/components/icons/shadcn-icon';

export const STYLES_INFO = {
  default: {
    label: 'Default',
    icon: null as LucideIcon | null,
  },
  // Add more styles as needed
} as const;

type Style = keyof typeof STYLES_INFO;

interface StyleContextType {
  style: Style;
  setStyle: (style: Style) => void;
}

const StyleContext = React.createContext<StyleContextType | undefined>(
  undefined,
);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = React.useState<Style>('default');

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = React.useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
}

export const STYLES_INFO_OLD: Record<
  Styles,
  { label: string; icon: React.ReactNode }
> = {
  [Styles.Default]: {
    label: 'Default',
    icon: <ShadcnIcon />,
  },
  [Styles.ShadcnDefault]: {
    label: 'Shadcn Default',
    icon: (
      <div className="bg-background border border-border size-6 flex items-center justify-center rounded-sm shrink-0">
        <ShadcnIcon className="size-4 text-foreground" />
      </div>
    ),
  },
  [Styles.ShadcnNewYork]: {
    label: 'Shadcn New York',
    icon: (
      <div className="bg-black dark:bg-white size-6 p-0.5 flex items-center justify-center rounded-sm shrink-0">
        <ShadcnIcon className="size-4 text-white dark:text-black" />
      </div>
    ),
  },
};

const LOCAL_STORAGE_KEY = 'animate-ui-style';

type StyleContextTypeOld = {
  style: Styles;
  setStyle: (style: Styles) => void;
};

const StyleContextOld = React.createContext<StyleContextTypeOld | undefined>(
  undefined,
);

export const useStyleOld = (): StyleContextTypeOld => {
  const context = React.useContext(StyleContextOld);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};

export const StyleProviderOld = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [style, setStyle] = React.useState<Styles>(Styles.Default);

  const handleStyleChange = (newStyle: Styles) => {
    setStyle(newStyle);
    localStorage.setItem(LOCAL_STORAGE_KEY, newStyle);
  };

  React.useEffect(() => {
    const savedStyle = localStorage.getItem(LOCAL_STORAGE_KEY) as Styles;
    if (savedStyle) {
      setStyle(savedStyle);
    }
  }, []);

  return (
    <StyleContextOld.Provider value={{ style, setStyle: handleStyleChange }}>
      {children}
    </StyleContextOld.Provider>
  );
};
