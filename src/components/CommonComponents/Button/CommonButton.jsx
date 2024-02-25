import React, { useState } from 'react';

const CommonButton = ({ onClick, className, children, disabled, loading, style }) => {
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = () => {
    if (!isLoading && onClick) {
      setIsLoading(true);
      onClick();
    }
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={disabled || isLoading}
      style={style}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default CommonButton;
