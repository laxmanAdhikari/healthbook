import React from 'react';
import '../components/ContentGrid.css'
interface ContentGridProps {
  data: {
    food: string;
    healthBenefits: string;
    howToUse: string;
    composition: string;
  }[];
  className?: string;
}

const ContentGrid: React.FC<ContentGridProps> = ({ data, className }) => {
  return (
    <div className={`grid-container ${className || ''}`}>
      <div className="grid-header">
        <div className="column">Food</div>
        <div className="column">Health Benefits</div>
        <div className="column">How To Use</div>
        <div className="column">Composition</div>
      </div>
      {data.map((row, index) => (
        <div key={index} className="grid-row">
          <div className="column">
            {row.food.includes('.jpg') ? (
              <img
                src={`${process.env.PUBLIC_URL}/images/${row.food}`}
                alt="Food"
                className="food-image"
                style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }}
              />
            ) : (
              row.food
            )}
          </div>
          <div className="column">{row.healthBenefits}</div>
          <div className="column">{row.howToUse}</div>
          <div className="column">{row.composition}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
