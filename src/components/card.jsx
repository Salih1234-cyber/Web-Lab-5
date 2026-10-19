import React from 'react';

function Card({ children }) {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '10px 0',
    borderRadius: '8px',
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;