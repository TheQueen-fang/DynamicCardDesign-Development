import React, { useContext } from "react";
import CrossSign from "./icons/CrossSign";
import TextSliderIcon from "./icons/TextSliderIcon";
import Bold from "./icons/Bold";
import Italic from "./icons/Italic";
import Underline from "./icons/Underline";
import TextStrike from "./icons/TextStrike";
import ParaCenter from "./ParaCenter";
import ParaRight from "./ParaRight";
import AlingParaLeft from "../components/icons/AlingParaLeft";

import RangeSlider from "./RangeSlider";
import ColorPicker from "./ColorPicker";


import { AppContext } from "../layout";
function SidePanel() {
  const { initialState, setInitialState } = useContext(AppContext);
  
  
  const handleColorChange = (color) => {
    console.log("Selected color:", color);

    setInitialState((prev) => ({
      ...prev,
      color:color
    }
    ))
  };

  
  function toggleBold() {
      setInitialState((prev) => ({
      
      ...prev,
        bold: !prev.bold,
      
        
    }
    )
    );
    
  }
  function toggleItalic() {
    setInitialState((prev) => ({
      ...prev,
      italic: !prev.italic,
    }));
  }


  function toggleUnderline() {
   setInitialState((prev) => ({
     ...prev,
     underline: !prev.underline,
   }));
  }
  
  function toggleTextStrike() {
    setInitialState((prev) => ({
      ...prev,
      textStrike: !prev.textStrike,
    }));
  }


  function alignL() {
   setInitialState((prev) => ({
     ...prev,
     alignL: "left",
   }));
  }

  function alignC() {
    setInitialState((prev) => ({
      ...prev,
      alignL: "center",
    }));
  }


  function alignR() {
    setInitialState((prev) => ({
      ...prev,
      alignL: "right",
    }));
  }

  return (
    <div className="top-[72px]   max-w-[350px] left-0     shadow-inner    absolute   bg-white   h-[450px]">
      <div className="white flex flex-col   mx-auto     justify-center">
        {/* Add Text with Cross Icon */}
        <div className="flex  justify-between  mt-8   p-2    shadow-md">
          <p className="font-semibold">Add Text</p>
          <CrossSign />
        </div>

        <div className="mx-4">
          <p className="font-semibold   my-4">Text</p>

          {/* slider */}
          <div className="bg-bgColor">
            <div className="flex  space-x-3  p-2">
              <TextSliderIcon />
              <RangeSlider />
            </div>
          </div>

          {/* Extra options Italic bold underline strike */}
          <div className="bg-bgColor  my-2 p-2">
            <div className="flex  justify-around">
              <div onClick={toggleBold}>
                <Bold />
              </div>
              <div onClick={toggleItalic}>
                <Italic />
              </div>

              <div onClick={toggleUnderline}>
                <Underline />
              </div>
              <div onClick={toggleTextStrike}>
                <TextStrike />
              </div>
            </div>
          </div>

          {/* Text AlignMent */}
          <div className="bg-bgColor   p-2">
            <div className="flex   justify-between  mx-4">
              <div onClick={alignL}>
                <AlingParaLeft />
              </div>
              <div  onClick={alignC}>
                <ParaCenter />
              </div>
              <div  onClick={alignR}>
                <ParaRight />
              </div>
            </div>
          </div>

          {/* Color Panel */}
          <div className="flex  flex-col  gap-2">
            <p className="font-semibold">Colour</p>
            <div className="max-h-[250px]">
              <ColorPicker layout={[]} onColorChange={handleColorChange} />
            </div>
          </div>
        </div>
      </div>
      {/* <InputElement3 setBold={bold} /> */}
    </div>
  );
}

export default SidePanel;
