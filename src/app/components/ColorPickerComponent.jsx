import React, { useEffect, useRef, useState } from 'react';
import iro from '@jaames/iro';

const ColorPickerComponent = ({ onColorChange }) => {
  const colorPickerRef = useRef(null);
  let colorPicker = null;
  let count = 0;

  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (colorPickerRef.current && count < 1) {
      count++;
      colorPicker = new iro.ColorPicker(colorPickerRef.current, {
        layout: [
          {
            component: iro.ui.Box, 
            options: {
              // You can customize box-specific options here if needed
            },
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: 'hue',
              // You can customize slider-specific options here if needed
            },
          },
        ],
      });

      const colorChangeHandler = (color) => {
        onColorChange && onColorChange(color.rgb);
        console.log("RGB COLOR: ", color.rgb);
        setSelectedColor(color.rgb);
      };

      colorPicker.on('color:change', colorChangeHandler);

      // Cleanup on unmount
      return () => {
        colorPicker.off('color:change', colorChangeHandler);

        // Reset colorPicker to null
        colorPicker = null;
      };
    }
  }, [onColorChange]);

  useEffect(() => {
    // Ensure the color picker is properly rendered
    if (colorPickerRef.current) {
      colorPickerRef.current.style.width = '300px'; // Set a width (adjust as needed)
      colorPickerRef.current.style.height = '300px'; // Set a height (adjust as needed)
    }
  }, []);

  return (
    <div>
      <div ref={colorPickerRef}></div>
      {(
        <div className="mt-4">
          <div
            className="w-12 h-12 rounded-full inline-block"
            style={{
             // backgroundColor: `rgb(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b})`,
              background:`rgb(${selectedColor})`
            }}
          ></div>
          <div className="ml-2 inline-block">Hex: #{selectedColor.hexString}</div>
        </div>
      )}
    </div>
  );
};

export default ColorPickerComponent;
