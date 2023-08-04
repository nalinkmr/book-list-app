// src/components/atoms/RefreshControl.tsx
import React, { useState } from 'react';

interface RefreshControlProps {
  onRefresh: () => void;
}

const RefreshControl: React.FC<RefreshControlProps> = ({ onRefresh }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0].clientY - startY > 50) {
      setIsRefreshing(true);
    }
  };

  const handleTouchEnd = () => {
    if (isRefreshing) {
      onRefresh();
      setIsRefreshing(false);
    }
  };

  return (
    <div
      className={`refresh-control ${isRefreshing ? 'refreshing' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isRefreshing ? 'Refreshing...' : 'Pull to refresh...'}
    </div>
  );
};

export default RefreshControl;
