"use client";
import Image from "next/image";
import Reset from "./components/icons/Reset";

import Link from "next/link";
import Draggable from "react-draggable";
import logo from "../../public/logo.png";

import { useState, useContext, useRef } from "react";
import InputElement from "./components/InputElement";
import UploadImage from "./components/UploadImage";
import AddImage from "./components/icons/AddImage";
import Background from "./components/icons/Background";
import Cardlogo from "./components/icons/Cardlogo";
import CrossIcon from "./components/icons/CrossIcon";
import LeftAlignIcon from "./components/icons/LeftAlignIcon";
import QrCode from "./components/icons/QrCode";
import RightAlignIcon from "./components/icons/RightAlignIcon";
import Text from "./components/icons/Text.jsx";
import InputElement3 from "./components/InputElement3";
import Upload from "./components/Upload";
import ResizableInput from "./components/ResizableInput";
import SidePanel from "./components/SidePanel";
import BackgroundSidePanel from "./components/BackGroundSidePanel";
import { AppContext } from "./layout";

export default function Home() {
  const [imageSrcs, setImageSrcs] = useState([]);
  const { initialState, setInitialState } = useContext(AppContext);
  const [textElements, setTextElements] = useState([]);

  const fileInputRef = useRef(null);

  const handleAddText = () => {
    setTextElements((prevElements) => [
      ...prevElements,
      <InputElement3 key={prevElements.length} />,
    ]);
  };

  const handleImageUpload = (file) => {
    alert("hello!");
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const newImageSrcs = [...imageSrcs, e.target.result];
    //   setImageSrcs(newImageSrcs);
    // };
    // reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {/* header */}
      <div className="flex justify-between  items-center ">
        {/* toggle button */}
        <div className="flex   bg-toggle  w-[330px]   h-[54px]  items-center  ml-5 rounded-md">
          <div
            className={` text-fcolor   rounded-6  w-[140px] h-[40px] bg-white  relative  items-center left-[10px] shadow-lg`}
          >
            {/* content */}
            <div className="absolute  top-[10px]  left-[35px]  items-center  text-sm font-semibold">
              Front Side
            </div>
          </div>
          <div className="left-[70px]  relative">
            {/* content */}
            <div className="text-sm text-fcolor300  font-semibold">
              Back Side
            </div>
          </div>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={150}
              height={50}
              alt="Vink"
              className="w-20 object-cover"
            />
          </Link>
        </div>

        {/* side icons */}
        {/* grid grid-rows-1 grid-flow-col gap-5  place-items-center */}
        <div className="flex justify-between items-center  space-x-5 mr-3">
          <div>
            <Reset />
          </div>
          <div>
            <LeftAlignIcon />
          </div>
          <div>
            <RightAlignIcon />
          </div>
          <div>
            <CrossIcon />
          </div>
        </div>
      </div>

      {/* body */}
      <div className="max-w-[1300px] bg-myBlue  flex items-center justify-center  min-h-[430px] overflow-hidden">
        <div
          className="min-w-[430px] mx-auto  min-h-[250px]  bg-white  py-2 rounded-3xl relative  overflow-clip"
          style={{
            backgroundColor: initialState.bgColor,
          }}
        >
          {/* bounds="parent" className="resize" */}
          {/* <Draggable> */}
          <div className="z-30  !important  relative  opacity-70 outline-none  border-none">
            {textElements.map((element, index) => (
              <Draggable>
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${index * 20}px`, // Adjust the spacing
                    left: `${index * 20}px`, // Adjust the spacing
                  }}
                >
                  {element}
                </div>
              </Draggable>
            ))}
          </div>
          {/* </Draggable> */}
          <div className="  absolute top-[200px] left-[20px]  z-50  ">
            <Cardlogo />
          </div>
          {/* Image Draggable  */}
          {/* {imageSrcs.map((imageData, index) => (
            <Draggable bounds="parent" key={index}>
              <div
                className="absolute"
                style={{
                  top: `${index * 20}px`, // Adjust the spacing
                  left: `${index * 20}px`, // Adjust the spacing
                }}
              >
                <UploadImage
                  imageSrc={imageData.src}
                  onImageChange={(newSrc) => {
                    const newImageSrcs = [...imageSrcs];
                    newImageSrcs[index].src = newSrc;
                    setImageSrcs(newImageSrcs);
                  }}
                />
              </div>
            </Draggable>
          ))} */}

          <Draggable>
            <div className="z-10 !important">
              <Upload />
            </div>
          </Draggable>
        </div>
      </div>

      {/* footer all options  */}

      <div className="flex  justify-around mt-[30px] items-center ">
        {/* Plus 100 -minus  */}
        <div className="flex space-x-6 items-center">
          <div className="text-lg  text-black   bg-toggle p-2  w-[45px] h-[45px]  rounded-md  top-[10px]  flex justify-center items-center  font-semibold">
            -
          </div>
          <div className="text-black  text-sm font-semibold">100%</div>
          <div className="text-lg  text-black   bg-toggle p-2  w-[45px] h-[45px]  rounded-md  top-[10px]  flex justify-center items-center  font-semibold">
            +
          </div>
        </div>
        {/* add Image Icon */}
        <div
          className="flex bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]  hover:cursor-pointer"
         
        >
          <AddImage />

          <label
            htmlFor="imageInput"
            className="text-black p-1 text-sm font-semibold"
          >
            Add Image
          </label>

          {/* Place the input element here */}
          {/* <input
            type="file"
            id="imageInput"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          /> */}
        </div>

        {/* add Text Icon */}
        <div
          className="flex   bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]"
          onClick={handleAddText}
        >
          <Text />
          <p className="text-black  text-sm font-semibold p-1">Add Text</p>
        </div>

        {/* add Background */}
        <div className="flex      bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]">
          <Background />
          <p className="text-black  text-sm font-semibold p-1">Background</p>
        </div>

        {/* QR Code */}
        <div className="flex    bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]  text-sm font-semibold p-1">
          <QrCode />
          <p className="text-black">QR Code</p>
        </div>

        {/* Add to Cart */}
        <div className="flex  bg-fcolor w-[180px]  h-[45px]  justify-center items-center rounded-md  text-sm font-semibold">
          <p className="text-white ">Add To Cart </p>
          <p>-----</p>
        </div>
      </div>

      <SidePanel />
      <BackgroundSidePanel />
    </>
  );
}
