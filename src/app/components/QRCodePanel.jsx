import React, { useEffect } from 'react'
import CrossIcon from "./icons/CrossIcon";
import ColorPicker from "./ColorPicker";
import { AppContext } from "../layout";
import { useContext } from "react";
function QRCodePanel() {
  const { initialState, setInitialState } = useContext(AppContext);
  
  useEffect(() => {
    setInitialState((prev) => ({
      ...prev,
      bgImage: false,
      qr:true,
      
    }));
  }, []);
  
  const handleColorChange = (color) => {

    
    console.log("Selected color In QR:", color);

    setInitialState((prev) => ({
      ...prev,
      qrColor: color,
    }));
  };

  function bgVisibility() {
    setInitialState((prev) => ({
      ...prev,
      qrPanel: false,
    }));
  }
  return (
    <div className="top-[72px]    left-0   w-[345px]  shadow-inner    absolute   bg-white   h-[489px] overflow-hidden  flex-col">
      <div className=" flex    mx-auto      items-center  justify-between   shadow-md  px-4">
        <p className="font-semibold">QRCode</p>

        <div onClick={bgVisibility} className="cursor-pointer">
          <CrossIcon />
        </div>
      </div>
      <div className="flex   flex-col    mt-5     font-medium">
        <p className="mb-2  pl-6 ">Colour</p>
        <div>
          <ColorPicker
            layout={[]}
            onColorChange={handleColorChange}
            
          />
        </div>
      </div>
    </div>
  );
}

export default QRCodePanel
