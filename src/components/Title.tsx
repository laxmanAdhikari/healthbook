// src/components/Title.tsx
import React from 'react';

interface TitleProps {
  title: string;
  paragraph: string;
}

const Title: React.FC<TitleProps> = ({ title, paragraph }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Title;
