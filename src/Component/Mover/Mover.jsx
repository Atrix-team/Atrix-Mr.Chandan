import React, { useState, useEffect } from 'react';

const MoveWithMouse = () => {
  // Initial position for the element (fixed position)
  const [boxPosition, setBoxPosition] = useState({ x: 200, y: 200 });

  // State to track the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on mousemove
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add the event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // A small movement speed threshold
    const moveSpeed = 0.05; // smaller value means slower movement

    // The current position of the box (fixed location)
    const fixedX = 200;
    const fixedY = 200;

    // Calculate slight movement based on mouse position (the box moves a little towards the mouse)
    const moveX = fixedX + (mousePosition.x - fixedX) * moveSpeed;
    const moveY = fixedY + (mousePosition.y - fixedY) * moveSpeed;

    // Set the new position of the box with slight movement
    setBoxPosition({ x: moveX, y: moveY });
  }, [mousePosition]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${boxPosition.x}px`,
        top: `${boxPosition.y}px`,
        backgroundColor: 'lightblue',
        width: '100px',
        height: '100px',
        textAlign: 'center',
        lineHeight: '100px',
        borderRadius: '10px',
        cursor: 'pointer',
        pointerEvents: 'none', // Ensures the element doesn't block other interactions
      }}
    >
      Follow me
    </div>
  );
};

export default MoveWithMouse;
