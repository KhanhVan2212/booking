import React from "react";
import * as FaIcons from "react-icons/fa6";

// Type-safe icon mapper
export const IconMapper: React.FC<{ iconName: string; className?: string }> = ({
  iconName,
  className,
}) => {
  const IconComponent = (FaIcons as any)[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }
  
  return <IconComponent className={className} />;
};
