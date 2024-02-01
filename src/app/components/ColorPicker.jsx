import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPickerSketch = ({ onColorChange }) => {
  const [color, setColor] = useState("#ff0000");

  const handleChange = (newColor) => {
    setColor(newColor.hex);
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
              width: "254px", // Set the desired width
              // borderRadius: "80px", // Adjust the border-radius as needed,

              height: "50px",
            },
          },
        }}
      />
      {/* <div className="absolute   top-[200px]  left-20">
        <p className="text-sm font-medium text-gray-800">{color}</p>
      </div> */}
    </div>
  );
};

export default ColorPickerSketch;



 
