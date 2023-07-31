import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip';

const Button = ({ children, tooltipData , id}) => {


  
  useEffect(() => {
    console.log(tooltipData);
    setShowTooltip(tooltipData.targetElement === id);
  }, [tooltipData]);


  const [showTooltip, setShowTooltip] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowTooltip(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowTooltip(false);
  // };

  return (
    <div
      className="button-container Btn"
    >
      {children}
      {showTooltip && (
        <Tooltip
          targetElement={document.querySelector('.button-container')}
          position="top" // You can make this dynamic based on user selection
          style={{
            // Add dynamic styles here based on user input
            backgroundColor: tooltipData.bgcolor,
            color: tooltipData.color,
            padding: tooltipData.padding + 'px',
            width: tooltipData.width + 'px',
            fontSize: tooltipData.textsize + 'px',
            borderRadius: tooltipData.radius + 'px'
          }}
          arrowWidth={tooltipData.arrowWidth + 'px'}
          arrowHeight = {tooltipData.arrowHeight + 'px'}
          tooltiptext={tooltipData.tooltiptext}// You can make this dynamic based on user input
        />
      )}
    </div>
  );
};

export default Button;