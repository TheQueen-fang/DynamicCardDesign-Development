import React, { useRef, useEffect } from "react";
import interact from "interactjs";
import QRCode from '../../../public/image/NewQr.svg'
import Image from "next/image";
import { AppContext } from "../layout";
import { useContext } from "react";


function QR({ onDelete }) {




  const { initialState, setInitialState } = useContext(AppContext);


  useEffect(() => {
    console.log('Inside UseEffect of Qr')
  },[initialState.qrColor])
  useEffect(() => {
    const resizeMoveHandler = (event) => {
     
      const target = event.target;
      const rect = target.getBoundingClientRect();
      const x = parseFloat(target.getAttribute("data-x")) || 0;
      const y = parseFloat(target.getAttribute("data-y")) || 0;

      // update the element's style
      target.style.width = event.rect.width + "px";
      target.style.height = event.rect.height + "px";

      // translate when resizing from top or left edges
      target.style.webkitTransform =
        target.style.transform = `translate(${x}px,${y}px)`;
    };

  
    interact(".resizable-image")
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
          }),
        ],
        inertia: true,
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        restrictEdges: {
          outer: "parent",
          endOnly: true,
        },
        restrictSize: {
          min: { width: 50, height: 50 },
        },
      })
      .on("resizemove", resizeMoveHandler);

    // Cleanup the interaction when component unmounts
    return () => {
      interact(".resizable-image").unset();
    };
  }, []); // Run this effect only once

  return (
    <div className="resizable-image absolute z-2">
      {
        <div className="relative">
          {/* <span
            className="absolute left-1 top-1 cursor-pointer text-red-500"
            onClick={onDelete}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span> */}
          {/* border-2 border-grey-500 border-dashed */}
          <div className="overflow-hidden z-0" onClick={() => {
             setInitialState((prev) => ({
               ...prev,
               qrPanel: true,
             }));
          }}>
            <Image
              src={QRCode}
              height={50}
              width={50}
              alt="Selected Image"
              className={`z-0 w-full h-full object-cover  rounded-lg`}
              style={{ border: `3px solid ${initialState.qrColor}` }}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default QR;
