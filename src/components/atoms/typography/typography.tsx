import React from 'react';

interface TextProps {
  children: React.ReactNode;
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
  className?: string; 
}

const Typography: React.FC<TextProps> = ({ children, type = 'p', className}) => {
  const Tag = type;
  return <Tag className={`text ${className}`}>{children}</Tag>;
};

export default Typography;