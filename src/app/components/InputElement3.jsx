import React, { useEffect, useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import interact from "interactjs";
import { AppContext } from "../layout";
import SidePanel from "./SidePanel";

//HEY

const InputElement3 = ({ sliderValue, key, onDelete, parentFun }) => {
  const { initialState, setInitialState } = useContext(AppContext);

  const [textAttributes, setTextAttributes] = useState({
    bold: false,
    italic: false,
    underline: false,
    textStrike: false,
    align: "left",
    color: "#000000",
    fontSize: 20,
  });

  const resizableRef = useRef(null);
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(true);
  };

  useEffect(() => {
    const element = resizableRef.current;

    const handleResize = (event) => {
      if (!event) return;

      const { x, y } = event.target.dataset;
      const { width, height } = event.rect;
      const { widthDelta, heightDelta } = event.deltaRect; // Get the changes in dimensions

      const minWidth = 100; // Minimum width for the input element
      const minHeight = 50;

      const newWidth = Math.max(width, minWidth);
      const newHeight = Math.max(height, minHeight);

      Object.assign(event.target.style, {
        width: `${newWidth}px`,
        height: `${newHeight}px`,
        transform: `translate(${parseFloat(x) + widthDelta}px, ${
          parseFloat(y) + heightDelta
        }px)`, // Adjust translation with changes in dimensions
      });

      const fontSize = Math.min(newWidth, newHeight) * (sliderValue / 100);
      event.target.style.fontSize = `${fontSize}px`;

      const resizeEvent = new Event("resizemove");
      resizableRef.current.dispatchEvent(resizeEvent);
    };

    if (element) {
      let isResizing = false;

      interact(element)
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          listeners: {
            move: handleResize,
          },
          modifiers: [
            interact.modifiers.restrictEdges({
              outer: "parent",
            }),
            interact.modifiers.restrictSize({
              min: { width: 100, height: 50 },
            }),
          ],
          inertia: true,
        })
        .draggable({
          listeners: {
            move: (event) => {
              const { x, y } = event.target.dataset;
              const target = event.target;

              target.style.transform = `translate(${
                parseFloat(x) + event.dx
              }px, ${parseFloat(y) + event.dy}px)`;
              target.dataset.x = `${parseFloat(x) + event.dx}`;
              target.dataset.y = `${parseFloat(y) + event.dy}`;
            },
          },
        });
    }
    resizableRef.current.fontSize = initialState.sliderValue;
  }, [sliderValue, initialState.sliderValue]);

  useEffect(() => {
    const handleWindowResize = () => {
      const resizeEvent = new Event("resizemove");
      resizableRef.current.dispatchEvent(resizeEvent);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleClick = () => {
    parentFun(resizableRef, textAttributes, setTextAttributes);
    <SidePanel
      fun={parentFun}
      attributes={textAttributes}
      set={setTextAttributes}
    />;
  };

  return (
    <div className="relative w-full h-full" onClick={handleSelect} id="parent">
      <div className="relative">
        <span
          className="absolute -left-2 -top-2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-red-500  "
          onClick={() => onDelete()}
          style={{ zIndex: 1 }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div
          className="relative "
          style={{ paddingTop: "2rem", paddingLeft: "2rem" }}
        >
          <input
            type="text"
            ref={resizableRef}
            className={`border-2  border-gray-500 absolute top-0 left-0 resize-none p-2 cursor-move  border-dashed `}
            style={{
              width: "100px", // Initial width of the input element
              height: "50px",
              fontSize: `${textAttributes.fontSize}px`,
              fontWeight: textAttributes.bold ? "bold" : "normal",
              fontStyle: textAttributes.italic ? "italic" : "normal",
              textDecoration: textAttributes.underline ? "underline" : "none",
              textDecorationLine: textAttributes.textStrike
                ? "line-through"
                : "none",
              textAlign: textAttributes.align,
              color: textAttributes.color,
            }}
            onClick={handleClick}
            
          />
        </div>
      </div>
    </div>
  );
};

export default InputElement3;
