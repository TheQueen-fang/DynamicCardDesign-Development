"use client";
import Image from "next/image";
import Reset from "./components/icons/Reset";

import Link from "next/link";
import Draggable from "react-draggable";
import logo from "../../public/logo.png";

import { useState, useContext, useRef, useEffect } from "react";
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
import Upload3 from "./components/Upload3";
import ResizableInput from "./components/ResizableInput";
import SidePanel from "./components/SidePanel";
import BackgroundSidePanel from "./components/BackGroundSidePanel";
import { AppContext } from "./layout";
import QRCodePanel from './components/QRCodePanel';
import QR from './components/QR';

export default function Home() {
  const [imageSrcs, setImageSrcs] = useState([{}]);
  const { initialState, setInitialState } = useContext(AppContext);
  //const [textElements, setTextElements] = useState([]);
  const [childref, setChildRef] = useState({ ref: null, fun: null });

  const [textElements, setTextElements] = useState([{}]);

  const [background, setBackground] = useState(false);

  const [backside, setBackSide] = useState(false);
  const [att, setAtt] = useState();

  const fileInputRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      childref.ref &&
      childref.ref.current &&
      !childref.ref.current.contains(event.target)
    ) {
      // Click occurred outside the child ref
      if (
        event.target.nodeName !== "INPUT" &&
        event.target.id !== "side" &&
        !event.target.closest("#side")
      ) {
        setChildRef({ ref: null, fun: null });
      }
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [childref]);




  

  useEffect(() => {
    console.log("SetChildRef:", childref.ref);
  }, [childref]);
  function parentFunction(ref, attributes, setTextAttributes) {
    // childUpdatFun = setTextAttributes;
    // childUpdatFun;
    console.log("Parent FUnction");
    console.log("Printing Ref : ", ref);
    setChildRef((prevChildRef) => ({
      ...prevChildRef,
      ref: ref,
      fun: setTextAttributes,
    }));

    setAtt(attributes);
    console.log("SetChildRef :", childref.ref);

    attributeUpdate();
  }
  function attributeUpdate() {
    console.log("attribute update called !");
    console.log("intialState.bold : ", initialState.bold);

    console.log("ChildRef:", childref.fun);
    if (childref.ref != null) {
      if (initialState.bold) {
        //childref.ref.current.style.fontWeight = "bold";
        childref.fun((prev) => ({
          ...prev,
          bold: true,
        }));
      }
      if (initialState.italic) {
        childref.fun((prev) => ({
          ...prev,
          italic: true,
        }));
      }

      if (initialState.underline) {
        childref.fun((prev) => ({
          ...prev,
          underline: true,
        }));
      }

      if (initialState.textStrike) {
        childref.fun((prev) => ({
          ...prev,
          textStrike: true,
        }));
      }

      if (initialState.alignL) {
        childref.fun((prev) => ({
          ...prev,
          align: "left",
        }));
      } else if (initialState.alignC) {
        childref.fun((prev) => ({
          ...prev,
          align: "center",
        }));
      } else if (initialState.alignR) {
        childref.fun((prev) => ({
          ...prev,
          align: "right",
        }));
      }

      // if (initialState.sliderValue) {
      //   childref.fun((prev) => ({
      //     ...prev,
      //     fontSize: initialState.sliderValue,
      //   }));
      // }
      // if (initialState.color) {
      //   childref.fun((prev) => ({
      //     ...prev,
      //     color: initialState.color,
      //   }));
      // }
    }
  }

  const handleDeleteImage = (id) => {
    // Prompt the user or perform any other logic before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (confirmDelete) {
      // Update the imageSrcs state to remove the image with the given id
      setImageSrcs((prevImageSrcs) => {
        const newImageSrcs = prevImageSrcs.filter((image) => image.id !== id);
        return newImageSrcs;
      });
    }
  };

  const handleAddText = () => {
    console.log("Text Element: ", textElements);
    const timestamp = new Date().getTime();

    setInitialState((prev) => ({
      ...prev,
      background: true,
    }));

    setTextElements((prevElements) => [
      ...prevElements,

      {
        key: timestamp,
        element: (
          <InputElement3
            key={timestamp}
            identifier={timestamp}
            onDelete={() => handleDeleteElement(timestamp)}
            parentFun={parentFunction}
          />
        ),
      },
    ]);
  };

  const handleDeleteElement = (identifier) => {
    setTextElements((prevElements) => {
      const updatedElements = prevElements.filter(
        (element) => element.key !== identifier
      );
      return updatedElements;
    });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      // Read each selected file and add it to the array of image sources
      const newImageSrcs = [...imageSrcs];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImageSrcs.push({
            src: reader.result,
            id: newImageSrcs.length, // Set the id to the length of the array
          });
          setImageSrcs(newImageSrcs);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  function handleBackground() {
    setInitialState((prev) => ({
      ...prev,
      bgImage: true,
    }));
  }


  function handleQrPanel() {
    setInitialState((prev) => ({
      ...prev,
      qrPanel: true,
    }));
  }
  const parentWidth = 400; // Set the width of the parent element
  const parentHeight = 200; //set the height of the parent element inline side 

  return (
    <>
      {/* header */}
      <div className="flex justify-between  items-center">
        {/* toggle button */}
        <div className="flex   bg-toggle  w-[330px]   h-[54px]  items-center  ml-5 rounded-md">
          <div
            className={` text-fcolor   rounded-6  w-[140px] h-[40px] bg-white  relative  items-center left-[10px] shadow-lg`}
          >
            {/* content */}
            <div className="absolute  top-[10px]  left-[35px]  items-center  text-sm font-semibold  cursor-pointer">
              Front Side
            </div>
          </div>
          <div className="left-[70px]  relative">
            {/* content */}
            <div
              className="text-sm text-fcolor300  font-semibold  cursor-pointer"
              onClick={() => {
                setBackSide(!backside);
              }}
            >
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

      <div
        id="ParentDiv"
        className="max-w-[1300px] bg-myBlue  flex items-center justify-center  min-h-[490px] overflow-hidden"
      >
        {!backside ? (
          <div
            className="min-w-[430px] mx-auto  min-h-[250px]  bg-white  py-2 rounded-3xl relative  overflow-clip"
            style={{
              backgroundColor: initialState.bgColor,
              backgroundImage: initialState.backgroundImage
                ? `url('${initialState.backgroundImage}')`
                : "",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* {initialState.backgroundImage ? (
              <img
                src={initialState.backgroundImage}
                alt="Selected Image"
                className="z-0 w-[430px] h-[250px]   object-cover center   border-2 border-grey-500  border-dashed"
              />
            ) : (
              ""
            )} */}
            {/* {initialState.backgroundImage && (
              <Image
                src={initialState.backgroundImage}
                alt="background-image"
                // layout="fill" // Fill the container with the image
                objectFit="cover" // Scale the image to cover the entire container
                className="object-cover absolute"
                width={500}
                height={200}
              />
            )} */}
            {/* bounds="parent" className="resize" */}

            <div className="z-30  !important  relative  opacity-70 outline-none  border-none">
              {textElements.map(({ key, element }, index) => (
                <Draggable key={key}>
                  <div
                    className="absolute"
                    style={{
                      top: `${index * 20}px`,
                      left: `${index * 20}px`,
                    }}
                  >
                    {element}
                  </div>
                </Draggable>
              ))}
            </div>

            <div className="  absolute top-[200px] left-[20px]  z-50 ">
              <Cardlogo />
            </div>

            {imageSrcs.map(({ src, id }, index) => (
              <Draggable key={id}>
                <div>
                  <Upload3
                    imageSrc={src}
                    onDelete={() => handleDeleteImage(id)}
                  />
                </div>
              </Draggable>
            ))}

            <div>
              <Draggable>
                <div>{initialState.qr ? <QR /> : <></>}</div>
              </Draggable>
            </div>
          </div>
        ) : (
          <div
            className="min-w-[430px] mx-auto  min-h-[250px]  bg-white  py-2 rounded-3xl relative  overflow-clip"
            style={{
              backgroundColor: initialState.bgColor,
            }}
          ></div>
        )}
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
          className="flex bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]  cursor-pointer"
          // onClick={() => fileInputRef.current.click()}
        >
          <AddImage />

          <label
            htmlFor="imageInput"
            className="text-black p-1 text-sm font-semibold  cursor-pointer"
          >
            Add Image
          </label>

          {/* Place the input element here */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            // className="absolute -left-full" // Position off-screen to the left
            ref={fileInputRef}
          />
        </div>

        {/* add Text Icon */}
        <div
          className="flex   bg-toggle   space-x-6 rounded-md items-center  cursor-pointer  justify-center  w-[180px] h-[45px]"
          onClick={handleAddText}
        >
          <Text />
          <p className="text-black  text-sm font-semibold p-1">Add Text</p>
        </div>

        {/* add Background */}
        <div
          className="flex   cursor-pointer    bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]"
          onClick={handleBackground}
        >
          <Background />
          <p className="text-black  text-sm font-semibold p-1">Background</p>
        </div>

        {/* QR Code */}
        <div
          className="flex   cursor-pointer  bg-toggle   space-x-6 rounded-md items-center  justify-center  w-[180px] h-[45px]  text-sm font-semibold p-1"
          onClick={handleQrPanel}
        >
          <QrCode />
          <p className="text-black">QR Code</p>
        </div>

        {/* Add to Cart */}
        <div className="flex  bg-fcolor w-[180px]  h-[45px]  justify-center items-center rounded-md  text-sm font-semibold  cursor-pointer">
          <p className="text-white ">Add To Cart </p>
          <p>-----</p>
        </div>
      </div>

      <div id="side">
        {childref.ref != null && initialState.background && (
          <SidePanel
            fun={attributeUpdate}
            attributes={att}
            set={childref.fun}
          />
        )}
      </div>
      <div>
        {initialState.bgImage && (
          <BackgroundSidePanel
            fun={attributeUpdate}
            attributes={att}
            set={childref.fun}
          />
        )}
      </div>

      <div>{initialState.qrPanel && <QRCodePanel />}</div>
    </>
  );
}
