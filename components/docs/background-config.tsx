'use client';
import { Input } from '@/components/ui/input';
import { createContext, useContext, useState } from 'react';

const defaultGradientColors = [
  { color: 'var(--color-primary)', start: '0%' },
  { color: 'var(--background)', start: '100%' },
];

type BackgroundConfigContextType = {
  gradientColors: { color: string; start: string }[];
  gradientSize: { width: string; height: string };
  gradientPosition: { x: string; y: string };
  setGradientColors: (colors: { color: string; start: string }[]) => void;
  setGradientSize: (size: { width: string; height: string }) => void;
  setGradientPosition: (position: { x: string; y: string }) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const BackgroundConfigContext = createContext<
  BackgroundConfigContextType | undefined
>(undefined);

export function BackgroundConfig({ children }: { children: React.ReactNode }) {
  const [gradientColors, setGradientColors] = useState(defaultGradientColors);
  const [gradientSize, setGradientSize] = useState({
    width: '50%',
    height: '50%',
  });
  const [gradientPosition, setGradientPosition] = useState({
    x: '50%',
    y: '50%',
  });
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BackgroundConfigContext.Provider
      value={{
        gradientColors,
        gradientSize,
        gradientPosition,
        setGradientColors,
        setGradientSize,
        setGradientPosition,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </BackgroundConfigContext.Provider>
  );
}

export function useSetBackgroundConfig() {
  const context = useContext(BackgroundConfigContext);
  if (!context) {
    throw new Error(
      'useSetBackgroundConfig must be used within a BackgroundConfigProvider',
    );
  }
  return context;
}

export function GradientColorInputs() {
  const { gradientColors, setGradientColors } = useSetBackgroundConfig();

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...gradientColors];
    newColors[index] = { ...newColors[index], color: value };
    setGradientColors(newColors);
  };

  const handleStartChange = (index: number, value: string) => {
    // Remove any non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    // Ensure the value is between 0 and 100
    const clampedValue = Math.min(
      100,
      Math.max(0, parseFloat(numericValue) || 0),
    );
    // Format with 2 decimal places and add % symbol
    const formattedValue = `${clampedValue.toFixed(2)}%`;

    const newColors = [...gradientColors];
    newColors[index] = { ...newColors[index], start: formattedValue };
    setGradientColors(newColors);
  };

  const addColor = () => {
    const lastColor = gradientColors[gradientColors.length - 1];
    const lastStart = lastColor ? parseFloat(lastColor.start) : 0;
    const newStart = `${Math.min(100, lastStart + 20).toFixed(2)}%`;
    setGradientColors([
      ...gradientColors,
      { color: '#000000', start: newStart },
    ]);
  };

  const removeColor = (index: number) => {
    if (gradientColors.length > 1) {
      const newColors = gradientColors.filter((_, i) => i !== index);
      setGradientColors(newColors);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <label className="font-medium text-sm">Gradient Colors</label>
        <button
          onClick={addColor}
          className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Add Color
        </button>
      </div>
      {gradientColors.map((color, index) => (
        <div key={index} className="flex gap-2 items-center">
          <Input
            type="color"
            value={color.color}
            onChange={(e) => handleColorChange(index, e.target.value)}
            className="w-12 h-8 p-1"
          />
          <Input
            type="number"
            value={parseFloat(color.start)}
            onChange={(e) => handleStartChange(index, e.target.value)}
            className="w-20"
            min="0"
            max="100"
            step="10"
            placeholder="0"
          />
          <button
            onClick={() => removeColor(index)}
            className="p-1 text-destructive hover:text-destructive/90"
            disabled={gradientColors.length <= 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export function GradientSizeInputs() {
  const { gradientSize, setGradientSize } = useSetBackgroundConfig();

  const handleSizeChange = (dimension: 'width' | 'height', value: string) => {
    setGradientSize({ ...gradientSize, [dimension]: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-sm">Gradient Size</label>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs">Width</label>
          <Input
            type="range"
            min="0"
            max="100"
            value={parseInt(gradientSize.width)}
            onChange={(e) => handleSizeChange('width', `${e.target.value}%`)}
            className="w-32"
          />
          <span className="text-xs">{gradientSize.width}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs">Height</label>
          <Input
            type="range"
            min="0"
            max="100"
            value={parseInt(gradientSize.height)}
            onChange={(e) => handleSizeChange('height', `${e.target.value}%`)}
            className="w-32"
          />
          <span className="text-xs">{gradientSize.height}</span>
        </div>
      </div>
    </div>
  );
}

export function GradientPositionInputs() {
  const { gradientPosition, setGradientPosition } = useSetBackgroundConfig();

  const handlePositionChange = (axis: 'x' | 'y', value: string) => {
    setGradientPosition({ ...gradientPosition, [axis]: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-sm">Gradient Position</label>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs">X Position</label>
          <Input
            type="range"
            min="-100"
            max="100"
            value={parseInt(gradientPosition.x)}
            onChange={(e) => handlePositionChange('x', `${e.target.value}%`)}
            className="w-32"
          />
          <span className="text-xs">{gradientPosition.x}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs">Y Position</label>
          <Input
            type="range"
            min="-100"
            max="100"
            value={parseInt(gradientPosition.y)}
            onChange={(e) => handlePositionChange('y', `${e.target.value}%`)}
            className="w-32"
          />
          <span className="text-xs">{gradientPosition.y}</span>
        </div>
      </div>
    </div>
  );
}

export function GradientControls() {
  const { isOpen, setIsOpen } = useSetBackgroundConfig();

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90"
      >
        <span>Gradient Controls</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`flex flex-col gap-4 transition-all duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
      >
        <GradientColorInputs />
        <GradientSizeInputs />
        <GradientPositionInputs />
      </div>
    </div>
  );
}
