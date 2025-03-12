import { Card } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const ChartContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: null, height: 300 });

  const handleResizeContainer = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!containerRef.current) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = containerRef.current.clientWidth;
    const startHeight = containerRef.current.clientHeight;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      setDimensions({
        width: startWidth + deltaX,
        height: startHeight + deltaY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleResizeInitialDimensions = () => {
    setDimensions({ width: null, height: 300 });
  };

  return (
    <div
      ref={containerRef}
      className="relative border"
      style={{
        width: dimensions.width === null ? "100%" : `${dimensions.width}px`,
        height: dimensions.height === null ? "100%" : `${dimensions.height}px`,
      }}
    >
      <Card.Root className="w-full h-full">
        <Card.Body className="w-full h-full">{children}</Card.Body>
      </Card.Root>
      <button
        className="absolute border w-3 h-3 -bottom-1.5 -right-1.5 bg-white cursor-nwse-resize"
        onMouseDown={handleResizeContainer}
        onDoubleClick={handleResizeInitialDimensions}
      />
    </div>
  );
};

export default ChartContainer;
