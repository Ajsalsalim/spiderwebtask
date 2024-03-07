import React, { useState } from 'react';

function Button3() {
  const [isHovered, setIsHovered] = useState(false);

  const style2 = {
    width: "10rem",
    height: "1.75rem",
    borderRadius: "0.5rem",
    background: isHovered ? "#9c9a9b" : "transparent",
    textAlign: "left",
    border: "none",
    color: isHovered ? "white" : "white",
  };

  return (
    <div style={{marginTop:"-0.75rem"}}>
      <button 
        style={style2} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Partial Requests
      </button>
    </div>
  );
}

export default Button3;