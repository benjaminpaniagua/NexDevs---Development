import { useState, useEffect } from 'react';

// Hook in charge of reading the screen resolution and returning the data necessary for the calendars to adjust to the screen size.
const useScreenWidth = () => {
  const [isRendering, setIsRendering] = useState(true);

  // This const stores the data of the screen resolution
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // It is in charge of modifying the screen resolution value in case the user modifies the screen size in the browser
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Modifies the base data of the calendars depending on the resolution of the screen.
  useEffect(() => {
    if (screenWidth <= 765) {
      setIsRendering(false);
      console.log('Mobile');
    } else {
      setIsRendering(true);
      console.log('Desktop');
    }
  }, [screenWidth]);

  return isRendering;
};

export default useScreenWidth;
