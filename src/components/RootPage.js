import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AccessibilityMenu from './AccessibilityMenu';

export default function RootPage() {
  const [fontSize, setFontSize] = useState(16);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    if (fontSize * 1.15 <= 96) {
      setFontSize(prevFontSize => prevFontSize * 1.15);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize * 0.9 >= 16) {
      setFontSize(prevFontSize => prevFontSize * 0.9);
    }
  };

  const resetFontSize = () => {
    // setFontSize(16);
    setGrayscale(false);
    setHighContrast(false);
  };

  const toggleGrayscale = () => {
    setGrayscale(prevGrayscale => !prevGrayscale);
  };

  const toggleHighContrast = () => {
    setHighContrast(prevHighContrast => !prevHighContrast);
  };

  return (
    <div className={`content ${grayscale ? 'grayscale' : ''} ${highContrast ? 'high-contrast' : ''}`} style={{ fontSize: `${fontSize}px`}}>
      <Header />
      <div>
      <AccessibilityMenu
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        resetFontSize={resetFontSize}
        toggleGrayscale={toggleGrayscale}
        toggleHighContrast={toggleHighContrast}
        grayscale={grayscale}
        highContrast={highContrast}
        fontSize={fontSize}
      />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}