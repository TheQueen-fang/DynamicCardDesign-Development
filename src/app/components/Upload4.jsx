import React, { useState, useEffect } from "react";
import interact from "interactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Upload4({imageSrc}) {
  const [imageSrcc, setImageSrc] = useState(null);

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

    // Set up Interact.js for drag and resize
    interact(".upload-container")
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
          min: { width: 100, height: 100 },
        },
      })
      .on("resizemove", resizeMoveHandler);

    // Cleanup the interaction when component unmounts
    return () => {
      interact(".upload-container").unset();
    };
  }, []); // Run this effect only once

  const handleImageChange = (event) => {
    if (event?.target?.files?.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        //setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    // border: '1px solid #ccc' insode style
    //style={{ position:'absolute',  }}
    // <div className="upload-container   absolute z-2">
    //   <input
    //     type="file"
    //     onChange={handleImageChange}
    //     className="hidden"
    //     // Add any necessary attributes or styling
    //   />
    //   {imageSrcc && (
    //     <div className="overflow-hidden z-0">
    //       <img
    //         src={imageSrcc}
    //         alt="Selected Image"
    //         className="z-0  w-full h-full  object-cover"
    //         // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    //       />
    //     </div>
    //   )}
    // </div>

    <div className="upload-container absolute z-2">
      <input type="file" onChange={handleImageChange} className="hidden" />
      {imageSrcc && (
        <div className="relative">
          <span
            className="absolute left-1 top-1 cursor-pointer text-red-500"
            onClick={onDelete}
          >
            I am spannnnnnnnn

            <FontAwesomeIcon icon={faTimes} />
          </span>
          <div className="overflow-hidden z-5">
            <img
              src={imageSrcc}
              alt="Selected Image"
              className="z-0 w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload4;
