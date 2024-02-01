///////////////////////////////new code

import React, { useEffect, useRef, useState, useContext } from "react";
import interact from "interactjs";
import { AppContext } from "../layout";

const InputElement3 = ({ sliderValue }) => {
  const { initialState, setInitialState } = useContext(AppContext);

  const resizableRef = useRef(null);

  console.log("In input3", initialState.sliderValue);

  useEffect(() => {
    const element = resizableRef.current;

    const handleResize = (event) => {
      if (!event) return;

      const { x, y } = event.target.dataset;

      const minWidth = 50;
      const minHeight = 50;

      const width = Math.max(event.rect.width, minWidth);
      const height = Math.max(event.rect.height, minHeight);

      Object.assign(event.target.style, {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${x}px, ${y}px)`,
      });

      const fontSize = Math.min(width, height) * (sliderValue / 100);
      event.target.style.fontSize = `${fontSize}px`;
    };

    if (element) {
      let isResizing = false;

      interact(element).resizable({
        edges: { top: true, left: true, bottom: true, right: true },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: "parent",
          }),
          interact.modifiers.restrictSize({
            min: { width: 50, height: 50 },
          }),
        ],
        listeners: {
          start: () => {
            isResizing = true;
          },
          move: (event) => {
            if (!isResizing) return;
            handleResize(event);
          },
          end: () => {
            isResizing = false;
          },
        },
      });

      interact(element).draggable({
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
  console.log("In input3", initialState.sliderValue, " ", sliderValue);
  return (
    <div
      className="relative w-full h-full"
      style={{
        textAlign: initialState.alignL
          ? "left"
          : initialState.alignC
          ? "center"
          : initialState.alignR
          ? "right"
          : "right",
      }}
    >
      <input
        type="text"
        ref={resizableRef}
        className={`w-32 h-32 border border-gray-300 absolute top-8 left-8 resize-none text-[${initialState.sliderValue}]`}
        style={{
          fontSize: `${initialState.sliderValue}px`,
          fontWeight: initialState.bold ? "bold" : "normal",
          fontStyle: initialState.italic ? "italic" : "normal",
          textDecoration: initialState.underline ? "underline" : "none",
          textDecorationLine: initialState.textStrike ? "line-through" : "none",
         
          textAlign: initialState.alignL,
           
          // textAlign: "right",
          color: initialState.color,
        }}
      />
    </div>
  );
};

export default InputElement3;
