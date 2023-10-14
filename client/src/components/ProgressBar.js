import React from 'react';
import { useSpring, animated } from 'react-spring';

const ProgressBar = ({ progress }) => {
  const width = useSpring({ width: `${progress}%` });

  return (
    <div className="progress-bar">
      <animated.div className="progress-bar-fill" style={width} />
    </div>
  );
};

export default ProgressBar;