import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-whatsapp-green hover:bg-green-600 text-white",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white",
    outline: "border-2 border-whatsapp-green text-whatsapp-green hover:bg-green-50"
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