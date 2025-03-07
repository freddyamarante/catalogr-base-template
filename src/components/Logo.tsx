import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
  svg?: string;
  size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'; 
  className?: HTMLDivElement['className'];
}

const Logo: React.FC<LogoProps> = ({svg, size = 'auto', className}) => {
  if (!svg || svg === '') {
    return (
      <div className={cn('flex items-center justify-center w-12 h-12 rounded-full bg-primary', className)}>
        <span className="text-white text-2xl font-bold">Logo</span>
      </div>
    );
  }

  const sizes = {
    sm: 'w-[50%] h-[50%]',
    md: 'w-[75%] h-[75%]',
    auto: 'w-auto h-auto',
    lg: 'w-[125%] h-[125%]',
    xl: 'w-[150%] h-[150%]',
    '2xl': 'w-[175%] h-[175%]',
  }

  return (
    <div className={cn(sizes[size], className)} dangerouslySetInnerHTML={{ __html: svg }}></div>
  );
};

export default Logo;