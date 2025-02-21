import React from 'react';
import { cn } from "@/lib/utils";

interface NoiseLightProps {
  className?: string;
}

const NoiseLight: React.FC<NoiseLightProps> = ({ className }) => {
  return (
    <div className={cn('noise-light w-full h-full', className)}></div>
  );
};

export default NoiseLight;