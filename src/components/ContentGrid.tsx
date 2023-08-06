interface ContentGridProps {
    data: {
      column1: string;
      column2: string;
      column3: string;
      column4: string;
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
            <div className="column">{row.column1}</div>
            <div className="column">{row.column2}</div>
            <div className="column">{row.column3}</div>
            <div className="column">{row.column4}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ContentGrid