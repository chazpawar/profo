import React, { useEffect, useRef, useState } from 'react';

interface AnimateSvgProps {
  width: string;
  height: string;
  viewBox: string;
  className?: string;
  path: string;
  strokeColor: string;
  strokeWidth: number;
  strokeLinecap: 'butt' | 'round' | 'square';
  animationDuration: number;
  animationDelay: number;
  animationBounce: number;
  reverseAnimation: boolean;
  enableHoverAnimation: boolean;
  hoverAnimationType: 'redraw' | 'scale' | 'color';
  hoverStrokeColor: string;
}

const AnimateSvg: React.FC<AnimateSvgProps> = ({
  width,
  height,
  viewBox,
  className,
  path,
  strokeColor,
  strokeWidth,
  strokeLinecap,
  animationDuration,
  animationDelay,
  animationBounce,
  reverseAnimation,
  enableHoverAnimation,
  hoverAnimationType,
  hoverStrokeColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathElement = pathRef.current;
      const pathLength = pathElement.getTotalLength();
      
      // Set initial state
      pathElement.style.strokeDasharray = pathLength.toString();
      pathElement.style.strokeDashoffset = reverseAnimation ? '0' : pathLength.toString();
      
      // Start animation after delay
      const timer = setTimeout(() => {
        setIsAnimating(true);
        pathElement.style.transition = `stroke-dashoffset ${animationDuration}s cubic-bezier(0.4, 0, 0.2, 1)`;
        pathElement.style.strokeDashoffset = reverseAnimation ? pathLength.toString() : '0';
      }, animationDelay * 1000);

      return () => clearTimeout(timer);
    }
  }, [animationDuration, animationDelay, reverseAnimation]);

  const handleMouseEnter = () => {
    if (enableHoverAnimation) {
      setIsHovered(true);
      if (hoverAnimationType === 'redraw' && pathRef.current) {
        const pathElement = pathRef.current;
        const pathLength = pathElement.getTotalLength();
        pathElement.style.strokeDashoffset = pathLength.toString();
        setTimeout(() => {
          pathElement.style.strokeDashoffset = '0';
        }, 50);
      }
    }
  };

  const handleMouseLeave = () => {
    if (enableHoverAnimation) {
      setIsHovered(false);
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: enableHoverAnimation ? 'pointer' : 'default',
        transform: isHovered && hoverAnimationType === 'scale' ? 'scale(1.1)' : 'scale(1.1)',
        transition: 'transform 0.3s ease',
      }}
    >
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={isHovered && hoverAnimationType === 'color' ? hoverStrokeColor : strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        style={{
          transition: hoverAnimationType === 'color' ? 'stroke 0.3s ease' : 'none',
        }}
      />
    </svg>
  );
};

export default AnimateSvg; 