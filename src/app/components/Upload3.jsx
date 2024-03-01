import React, { useState, useEffect } from "react";
import interact from "interactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Upload3({ imageSrc, onDelete }) {

  console.log(imageSrc);
  useEffect(() => {
    const resizeMoveHandler = (event) => {
      console.log("Upload3 useEffect executed");
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
          min: { width: 100, height: 100 },
        },
      })
      .on("resizemove", resizeMoveHandler);

    // Cleanup the interaction when component unmounts
    return () => {
      interact(".resizable-image").unset();
    };
  }, []); // Run this effect only once

  return (
    <div className="resizable-image absolute z-2   ">
      {imageSrc && (
        <div className="relative">
          <span
            className="absolute left-1 top-1 cursor-pointer text-red-500"
            onClick={onDelete}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <div className="overflow-hidden z-0  ">
            <img
              src={imageSrc}
              alt="Selected Image"
              className="z-0 w-full h-full object-cover   border-2 border-grey-500  border-dashed"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload3;
