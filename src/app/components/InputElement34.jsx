import React, { useEffect, useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import interact from "interactjs";
import { AppContext } from "../layout";
import SidePanel from "./SidePanel";

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

      // interact(element).resizable({
      //   edges: { top: true, left: true, bottom: true, right: true },
      //   modifiers: [
      //     interact.modifiers.restrictEdges({
      //       outer: "parent",
      //     }),
      //     interact.modifiers.restrictSize({
      //       min: { width: 100, height: 50 },
      //     }),
      //   ],
      //   listeners: {
      //     start: () => {
      //       isResizing = true;
      //     },
      //     move: (event) => {
      //       if (!isResizing) return;
      //       handleResize(event);
      //     },
      //     end: () => {
      //       isResizing = false;
      //     },
      //   },
      // });

      // interact(element).resizable({
      //   edges: { top: true, left: true, bottom: true, right: true },
      //   listeners: {
      //     move: function (event) {
      //       let { x, y } = event.target.dataset;

      //       x = (parseFloat(x) || 0) + event.deltaRect.left;
      //       y = (parseFloat(y) || 0) + event.deltaRect.top;

      //       Object.assign(event.target.style, {
      //         width: `${event.rect.width}px`,
      //         height: `${event.rect.height}px`,
      //         transform: `translate(${x}px, ${y}px)`,
      //       });

      //       Object.assign(event.target.dataset, { x, y });
      //     },
      //   },

      //   modifiers: [
      //     // keep the edges inside the parent
      //     interact.modifiers.restrictEdges({
      //       outer: "parent",
      //     }),

      //     // minimum size
      //     // interact.modifiers.restrictSize({
      //     //   min: { width: 100, height: 50 },
      //     // }),
      //   ],

      //  // inertia: true,
      // });

      // interact(element).draggable({
      //   listeners: {
      //     move: (event) => {
      //       const { x, y } = event.target.dataset;
      //       const target = event.target;

      //       target.style.transform = `translate(${
      //         parseFloat(x) + event.dx
      //       }px, ${parseFloat(y) + event.dy}px)`;
      //       target.dataset.x = `${parseFloat(x) + event.dx}`;
      //       target.dataset.y = `${parseFloat(y) + event.dy}`;
      //     },
      //   },
      // });






      interact(element)
        .resizable({
          // resize from all edges and corners
          edges: { left: true, right: true, bottom: true, top: true },

          listeners: {
            move(event) {
              var target = event.target;
              var x = parseFloat(target.getAttribute("data-x")) || 0;
              var y = parseFloat(target.getAttribute("data-y")) || 0;

              // update the element's style
              target.style.width = event.rect.width + "px";
              target.style.height = event.rect.height + "px";

              // translate when resizing from top or left edges
              x += event.deltaRect.left;
              y += event.deltaRect.top;

              target.style.transform = "translate(" + x + "px," + y + "px)";

              target.setAttribute("data-x", x);
              target.setAttribute("data-y", y);
              target.textContent =
                Math.round(event.rect.width) +
                "\u00D7" +
                Math.round(event.rect.height);
            },
          },
          modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
              outer: "parent",
            }),

            // minimum size
            interact.modifiers.restrictSize({
              min: { width: 100, height: 50 },
            }),
          ],

          inertia: true,
        })
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

  const handleClick = () => {
    parentFun(resizableRef, textAttributes, setTextAttributes);
    <SidePanel
      fun={parentFun}
      attributes={textAttributes}
      set={setTextAttributes}
    />;
  };

  return (
    <div className="relative w-full h-full" onClick={handleSelect}>
      <div className="relative">
        <span
          className="absolute left-[1rem] top-[1.2rem] cursor-pointer text-red-500"
          onClick={() => {
            onDelete();
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <input
          type="text"
          ref={resizableRef}
          className={`border-2  border-gray-500 absolute top-8 left-8 resize-none p-2 cursor-move  border-dashed `}
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
  );
};

export default InputElement3;
