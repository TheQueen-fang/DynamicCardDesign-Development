import React, { useState, useEffect } from "react";
import interact from "interactjs";

function Upload({ imageSrc, onImageChange }) {
  const [localImageSrc, setLocalImageSrc] = useState(imageSrc);

  useEffect(() => {
    const resizeMoveHandler = (event) => {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      const x = parseFloat(target.getAttribute("data-x")) || 0;
      const y = parseFloat(target.getAttribute("data-y")) || 0;

      // Update the element's style
      target.style.width = event.rect.width + "px";
      target.style.height = event.rect.height + "px";

      // Translate when resizing from top or left edges
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
        setLocalImageSrc(e.target.result);
        onImageChange(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container absolute z-2">
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        {/* Your Add Image component here */}
        <div className="overflow-hidden z-0">
          <img
            src={localImageSrc || imageSrc}
            alt="Selected Image"
            className="z-0 w-full h-full object-cover"
          />
        </div>
      </label>
    </div>
  );
}

export default Upload;
