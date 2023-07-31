import React from 'react';
import './Tooltip.css'; // Create Tooltip.css to style the tooltip

const Tooltip = (
    {
        targetElement,
        position,
        style,
        tooltiptext,
        arrowWidth,
        arrowHeight,
    }
 ) => {
  const tooltipStyle = {
    ...style,
    position: 'absolute',
    // TODO need to add adjust position dynamically
    // top: position === 'bottom' ? '41px' : 0,
    // right: position === 'left' ? 'auto' : 0,
    // bottom: position === 'top' ? 'auto' : 0,
    // left: position === 'right' ? 'auto' : 0,

  };

  const arrowStyle = {
    width: arrowWidth,
    height: arrowHeight
  }

  return (
    <div className="tooltip" style={tooltipStyle}>
       <img className="nodge-img" src="nodge.png" style={arrowStyle} alt="fireSpot"/>
        {tooltiptext}
    </div>
  );
};

export default Tooltip;