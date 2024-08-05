import React, { useState } from 'react';


const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsClicked(!isClicked);

  const buttonStyle = {
    backgroundColor: isHovered ? '#ff6347' : isClicked ? '#32cd32' : '#008cba',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default Button;
