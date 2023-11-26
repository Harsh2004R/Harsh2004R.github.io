// import { useState } from 'react';


// const useCustomColorMode  = () => {
//   const [colorMode, setColorMode] = useState('light');

//   // Defining custom color palettes...
//   const lightPalette = {
//     background: '#ffffff',
//     text: '#000000',
    
//   };

//   const darkPalette = {
//     background: '#1a1a1a',
//     text: '#ffffff',
   
//   };

//   // Custom function to toggle color mode...
//   const toggleColorMode = () => {
//     setColorMode((prevColorMode) => (prevColorMode === 'light' ? 'dark' : 'light'));
//     // Add any additional logic or side effects you want here...
//   };

//   // Custom function to set a specific color mode
//   const setColorModeTo = (mode) => {
//     setColorMode(mode);
//     // Add any additional logic or side effects you want here...
//   };

//   // Function to get the current color palette based on the color mode...
//   const getColorPalette = () => (colorMode === 'light' ? lightPalette : darkPalette);

//   // Return the color mode, functions, and current color palette...
//   return {
//     colorMode,
//     toggleColorMode,
//     setColorModeTo,
//     getColorPalette,
//     // Add any additional functions you need...
//   };
// };

// export default useCustomColorMode ;


import {useState} from 'react'

function UseCustomColorMode() {
  const [colorMode, setColorMode] = useState('light');

  // Defining custom color palettes...
  const lightPalette = {
    background: '#ffffff',
    text: '#000000',
    
  };

  const darkPalette = {
    background: '#1a1a1a',
    text: '#ffffff',
   
  };

  // Custom function to toggle color mode...
  const toggleColorMode = () => {
    setColorMode((prevColorMode) => (prevColorMode === 'light' ? 'dark' : 'light'));
    // Add any additional logic or side effects you want here...
  };

  // Custom function to set a specific color mode
  const setColorModeTo = (mode) => {
    setColorMode(mode);
    // Add any additional logic or side effects you want here...
  };

  // Function to get the current color palette based on the color mode...
  const getColorPalette = () => (colorMode === 'light' ? lightPalette : darkPalette);

  // Return the color mode, functions, and current color palette...
  return {
    colorMode,
    toggleColorMode,
    setColorModeTo,
    getColorPalette,
    // Add any additional functions you need...
  };
}

export default UseCustomColorMode

