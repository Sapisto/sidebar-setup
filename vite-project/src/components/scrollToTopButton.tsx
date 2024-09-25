// ScrollToTopButton.tsx
import React from 'react';
import { Fab } from '@mui/material'; // Import MUI Fab
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import Icon
import { useScrollTrigger, Slide } from '@mui/material'; // Import necessary hooks

const ScrollToTopButton: React.FC = () => {
  const trigger = useScrollTrigger({ threshold: 200 }); 

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <Slide in={trigger} direction="up">
      <Fab
        onClick={handleClick}
        color="primary"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 4,
          zIndex: 1000,
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Slide>
  );
};

export default ScrollToTopButton;
