import React from 'react';
import { motion } from 'framer-motion';

function ProgressBar({ formProgress }) {
  const progressBarVariants = {
    initial: { width: '0%' },
    animate: { width: `${formProgress}%` },
  };

  return (
    <motion.div className="progress-bar" initial="initial" animate="animate" variants={progressBarVariants}></motion.div>
  );
}

export default ProgressBar;