import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-10 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-500 ease-out disabled:opacity-50 transform hover:scale-105";
  
  const variants = {
    // Primary: Dark in light mode, White in dark mode
    primary: "bg-stone-900 text-white border border-stone-900 hover:bg-stone-700 dark:bg-white dark:text-black dark:border-white dark:hover:bg-stone-200 dark:hover:border-stone-200 shadow-xl",
    // Outline: Dark border in light, White border in dark
    outline: "bg-transparent text-stone-900 border border-stone-300 hover:bg-stone-900 hover:text-white dark:text-white dark:border-white/30 dark:hover:bg-white dark:hover:text-black dark:hover:border-white",
    // Glass: Adaptive glass
    glass: "glass-panel text-stone-900 hover:bg-white border-stone-200 dark:text-white dark:hover:bg-white/20 dark:border-white/20",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};