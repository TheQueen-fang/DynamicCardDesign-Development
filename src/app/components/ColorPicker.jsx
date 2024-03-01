import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

const ColorPickerSketch = ({ onColorChange,text,set}) => {
  const [color, setColor] = useState("#ff0000");
  useEffect(() => {
    if (text && text.color) {
      setColor(text.color);
    }
  }, [text]);

  
  const handleChange = (newColor) => {
    setColor(newColor.hex);
    if (set) {
      set((prev) => ({
        ...prev,
        color: color,
      }));
   }
    onColorChange && onColorChange(newColor.hex);
    
  };

  return (
    <div className="max-h-[100px]">
      <ChromePicker
        color={color}
        onChange={handleChange}
        disableAlpha={true}
        styles={{
          default: {
            picker: {
              width: "254px", 
              height: "50px",
            },
          },
        }}
      />
   
    </div>
  );
};

export default ColorPickerSketch;



 
