import React, { useState, useRef, useEffect } from 'react';
import './SwipeableCard.css';

const SwipeableCard = ({ children, onSwipe, threshold = 0.3 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const cardRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setCurrentX(touch.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
    
    // only allow left swipe
    if (deltaX < 0) {
      setCurrentX(touch.clientX);
      setTranslateX(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const deltaX = currentX - startX;
    const cardWidth = cardRef.current?.offsetWidth || 0;
    const swipeThreshold = cardWidth * threshold;
    
    if (Math.abs(deltaX) > swipeThreshold) {
      // trigger swipe
      onSwipe();
    } else {
      // reset position
      setTranslateX(0);
    }
    
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    
    // only allow left swipe
    if (deltaX < 0) {
      setCurrentX(e.clientX);
      setTranslateX(deltaX);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const deltaX = currentX - startX;
    const cardWidth = cardRef.current?.offsetWidth || 0;
    const swipeThreshold = cardWidth * threshold;
    
    if (Math.abs(deltaX) > swipeThreshold) {
      // trigger swipe
      onSwipe();
    } else {
      // reset position
      setTranslateX(0);
    }
    
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isDragging) {
      setTranslateX(0);
    }
  }, [isDragging]);

  return (
    <div className="swipeable-card-container">
      {/* background check button */}
      <div className="swipe-action-button">
        <div className="check-icon">✓</div>
      </div>
      
      {/* swipeable card */}
      <div
        ref={cardRef}
        className={`swipeable-card ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </div>
    </div>
  );
};

export default SwipeableCard; 