"use client";

import Image from "next/image";

import Reset from "./components/icons/Reset";

// import PinkLogo from "@/public_images/Header/Group 7223@2x.png";
import logo from "../../public/logo.png";
import Link from "next/link";
import Draggable from "react-draggable";

import LeftAlignIcon from "./components/icons/LeftAlignIcon";
import RightAlignIcon from "./components/icons/RightAlignIcon";
import CrossIcon from "./components/icons/CrossIcon";
import PlusIcon from "./components/icons/PlusIcon";
import QrCode from "./components/icons/QrCode";
import Text from "./components/icons/Text.jsx";
import AddImage from "./components/icons/AddImage";
import Background from "./components/icons/Background";
import InputElement from "./components/InputElement";
import DragDrop from "./components/DragDrop";

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="flex justify-between  items-center ">
        {/* toggle button */}
        <div className="flex   bg-toggle  w-[330px]   h-[54px]  items-center  ml-5 rounded-md">
          <div className="text-fcolor   rounded-6  w-[140px] h-[40px]  bg-white  relative  items-center left-[10px] shadow-lg">
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

      {/* <body */}
      <div className="max-w-[1300px] bg-myBlue  flex items-center justify-center  min-h-[430px]">
        <div className="min-w-[430px] mx-auto  min-h-[250px]  bg-white  py-2 rounded-3xl">
          <Draggable className="resize-x">
            <div>
              <InputElement />
            </div>
          </Draggable>
          <div>
            {/* <textarea class="hover:resize rounded-md"></textarea> */}

            <div className="hover:resize"></div>
          </div>
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
        <div className="flex bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]">
          <AddImage />
          <p className="text-black   text-sm p-1">Add Image</p>
        </div>

        {/* add Text Icon */}
        <div className="flex   bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]">
          <Text />
          <p className="text-black  text-sm p-1">Add Text</p>
        </div>

        {/* add Background */}
        <div className="flex">
          <Background />
          <p className="text-black">Background</p>
        </div>

        {/* QR Code */}
        <div className="flex">
          <QrCode />
          <p className="text-black">QR Code</p>
        </div>

        {/* Add to Cart */}
        <div className="flex">
          <p className="text-black">Add To Cart </p>
          <p></p>
        </div>
      </div>
    </>
  );
}
