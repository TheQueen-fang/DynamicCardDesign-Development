import React,   {useState,useEffect } from 'react'
import CrossIcon from './icons/CrossIcon';
import ColorPicker from './ColorPicker'
import UploadBg  from '../components/icons/UploadBg'
import { AppContext } from '../layout';
import { useContext } from 'react';

function BackGroundSidePanel({set}) {
 const [selectedFiles, setSelectedFiles] = useState([]);
  const { initialState, setInitialState } = useContext(AppContext);
  



  useEffect(() => {
    setInitialState((prev) => ({
      ...prev,

      qrPanel: false,
    }));
  }, []);
  const handleColorChange = (color) => {
    console.log("Selected color In BackGroundColor :", color);



    

    setInitialState((prev) => ({
      ...prev,
      bgColor: color,
    }));
  };




  function bgVisibility() {
     setInitialState((prev) => ({
       ...prev,
       bgImage:false,
     }));
  }


 

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);

    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setInitialState((prev) => ({
          ...prev,
          backgroundImage: reader.result, // Use the data URL as backgroundImage
        }));
      };
      reader.readAsDataURL(files[0]); // Read the first file as data URL
    }
  };

  const handleDivClick = () => {
    // Trigger click event on the hidden input element
    inputRef.current.click();
  };

  const inputRef = React.useRef();
  return (
    <div className="top-[72px]    left-0   w-[345px]  shadow-inner    absolute   bg-white   h-[489px] overflow-hidden  flex-col">
      <div className=" flex    mx-auto      items-center  justify-between   shadow-md  px-4">
        <p className="font-semibold">Background</p>

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
            set={set}
          />
        </div>
      </div>

      <div
        className="my-52 flex items-center justify-center  bg-uploadBackground  space-x-4  text-bgText   font-medium  p-2   max-w-[260px]  mx-10   rounded-lg  cursor-pointer "
        onClick={handleDivClick}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          multiple
        />
        <div>
          
          <UploadBg/>
          
        </div>
        <p className="">Upload background</p>
      </div>
    </div>
  );
}

export default BackGroundSidePanel
