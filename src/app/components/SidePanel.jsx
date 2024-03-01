import React, { useContext, useEffect, useState } from "react";
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
function SidePanel({ fun, attributes, set }) {
  const { initialState, setInitialState } = useContext(AppContext);
  const { alignState, setAlignState } = useState("left");

  // useEffect(() => {
  //   fun();
  // }, [
  //   initialState.bold,
  //   initialState.italic,
  //   initialState.underline,
  //   initialState.alignL,
  //   initialState.alignC,
  //   initialState.alignR,
  //   initialState.sliderValue,
  //   initialState.color,
  // ]);



  useEffect(() => {
    setInitialState((prev) => ({
      ...prev,
      bgImage: false,
      qrPanel:false
      
    }));
  }, []);
  console.log("ATTRIBUES : ", attributes);

  const [attribute, setAttributes] = useState({
    bold: false,
    italic: false,
    underline: false,
    textStrike: false,
    alignL: "left",
    alignC: "",
    alignR: "",
    color: "#000000",
    fontSize: 20, // You may want to ensure sliderValue is defined here
  });

  //setTextAttributes()
  console.log("ALIGN : ", attributes.align);
  useEffect(() => {
    setAttributes({
      color: attributes.color,
      bold: attributes.bold,
      italic: attributes.italic,
      underline: attributes.underline,
      textStrike: attributes.textStrike,
      alignL: `${attributes.align === "left" ? "left" :""}`,

      alignC: `${attributes.align === "center" ? "center" : ""}`,
      alignR: `${attributes.align === "right" ? "right" : ""}`,
      fontSize: attributes.fontSize,
    });
  }, [attributes]);

  useEffect(() => {
    set({
      color: attributes.color,
      bold: attributes.bold,
      italic: attributes.italic,
      underline: attributes.underline,
      textStrike: attributes.textStrike,
      align:attributes.align,
      fontSize: attributes.fontSize,
    });
  }, [attributes]);

  const handleColorChange = (color) => {
    console.log("Selected color:", color);
    
    set((prev) => ({
      ...prev,
      color: color,
    }));
    fun();
  };

  function toggleBold() {
    setAttributes((prev) => ({
      ...prev,
      bold:!prev.bold,
    }))
    set((prev) => ({
      ...prev,
      bold: !prev.bold,
    }));
  }
  function toggleItalic() {
    //fun();

    setAttributes((prev) => ({
      ...prev,
      italic: !prev.italic,
    }));
    set((prev) => ({
      ...prev,
      italic: !prev.italic,
    }));
  }

  function toggleUnderline() {
    //fun();
    setAttributes((prev) => ({
      ...prev,
      underline: !prev.underline,
    }));
    set((prev) => ({
      ...prev,
      underline: !prev.underline,
    }));
  }

  function toggleTextStrike() {
    //fun();
    setAttributes((prev) => ({
      ...prev,
      textStrike: !prev.textStrike,
    }));

    set((prev) => ({
      ...prev,
      textStrike: !prev.textStrike,
    }));
  }

  function alignL() {
    
    fun();
    setAttributes((prev) => ({
      ...prev,
      alignL: !prev.alignL,
      alignC: false,
      alignR: false,
    }));

    
    set((prev) => ({
      ...prev,
      align:"left"
    }));
  }

  function alignC() {
   
     setAttributes((prev) => ({
       ...prev,
       alignL: false,
       alignC: !prev.alignC,
       alignR: false,
     }));
    
    set((prev) => (
    
      {
      ...prev,
      align:"center"
    }));
  }

  function alignR() {
    
     setAttributes((prev) => ({
       ...prev,
       alignL: false,
       alignC: false,
       alignR: !prev.alignR,
     }));
    
    set((prev) => ({
      ...prev,
      align:"right"
    }));
  }
  const handleDivClick = () => {
    setInitialState((prevState) => ({
      ...prevState,
      background: false,
    }));
  };

  return (
    <div className="top-[72px]   max-w-[350px] left-0     shadow-inner    absolute   bg-white   h-[489px] overflow-hidden">
      <div className="white flex flex-col   mx-auto     justify-center">
        {/* Add Text with Cross Icon */}
        <div className="flex  justify-between  mt-8   p-2    shadow-md">
          <p className="font-semibold">Add Text</p>
          <div onClick={handleDivClick} className="cursor-pointer">
            <CrossSign />
          </div>
        </div>

        <div className="mx-4">
          <p className="font-semibold   my-4">Text</p>

          {/* slider */}
          <div className="bg-bgColor">
            <div className="flex  space-x-3  p-2">
              <TextSliderIcon />
              <RangeSlider func={fun} set={set} text={attributes} />
            </div>
          </div>

          {/* Extra options Italic bold underline strike */}
          <div className="bg-bgColor  my-2 p-2">
            <div className="flex  justify-around">
              <div
                onClick={toggleBold}
                className={`cursor-pointer ${
                  attribute.bold ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <Bold />
              </div>
              <div
                onClick={toggleItalic}
                className={`cursor-pointer ${
                  attribute.italic ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <Italic />
              </div>

              <div
                onClick={toggleUnderline}
                className={`cursor-pointer ${
                  attribute.underline ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <Underline />
              </div>
              <div
                onClick={toggleTextStrike}
                className={`cursor-pointer ${
                  attribute.textStrike ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <TextStrike />
              </div>
            </div>
          </div>

          {/* Text AlignMent */}
          <div className="bg-bgColor   p-2">
            <div className="flex   justify-between  mx-4">
              <div
                onClick={alignL}
                className={` cursor-pointer ${
                  attribute.alignL ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <AlingParaLeft />
              </div>
              <div
                onClick={alignC}
                className={` cursor-pointer ${
                  attribute.alignC ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <ParaCenter />
              </div>
              <div
                onClick={alignR}
                className={` cursor-pointer ${
                  attribute.alignR ? "bg-pink-400 rounded-lg" : "white"
                }`}
              >
                <ParaRight />
              </div>
            </div>
          </div>

          {/* Color Panel */}
          <div className="flex  flex-col  gap-2">
            <p className="font-semibold">Colour</p>
            <div className="max-h-[250px]">
              <ColorPicker
                layout={[]}
                onColorChange={handleColorChange}
                set={set}
                text={attributes}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <InputElement3 setBold={bold} /> */}
    </div>
  );
}

export default SidePanel;
