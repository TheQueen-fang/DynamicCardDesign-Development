'use client';



// import React from 'react';
// import { useEffect, useRef, useState } from 'react';
// import { useState } from 'react';
// export default function InputElem() {
//   const [textareaheight, setTextareaheight] = useState(1);
//   function handleChange(event) {
    
    
  
    
    
//       console.log(event.target.rows)
      
//       const height = event.target.scrollHeight;
//       const rowHeight = 15;
//       const trows = Math.ceil(height / rowHeight) - 1;
//     console.log('TROWS is  : ', trows);
//       if (trows > textareaheight) {
      
//         setTextareaheight(trows);
      
//     }
//     console.log('Height is : ', height);

      
    
    
//   }
  
//   return (
    
//     <div>
    
//       <textarea height={textareaheight} onChange={handleChange}> </textarea>
      
//     </div>
  
//   );
  
// }

// export default InputElem






// const {ResizableBox} = require('react-resizable');

// // ES6
// import { ResizableBox } from 'react-resizable';

// export default function InputElement(){

//     return (
//       <ResizableBox width={200} height={200}
//           minConstraints={[100, 100]} maxConstraints={[300, 300]}>
//         <span>Contents</span>
//       </ResizableBox>
//     );
  
// }





















// export default function InputElement() {
//   const textAreaRef = useRef(null);
//   const [val, setVal] = useState("");
//   const handleChange = (e) => {
//     setVal(e.target.value);
//   }
  
//   useEffect(() => {
//     textAreaRef.current.style.height = "auto";
//     textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
//   }, [val])

//   return (
//     // className='w-screen min-h-screen bg-neutral-950 grid place-items-center'
//     <div>
//       {/* className='text-neutral-200 bg-neutral-800 p-2 w-[30rem] rounded flex flex-col space-y-2' */}
//       <div>
//         {/* <span>Input text</span> */}

//         {/* className='p-1 bg-neutral-700 active:outline-none focus:outline-none rounded' */}
//         <textarea  placeholder='type something here' value={val} onChange={handleChange} rows="2" ref={textAreaRef}></textarea>
//       </div>
//     </div>
  // );

// }





// import React, { useEffect, useRef, useState } from 'react';
// import interact from 'interactjs';

// const InputElement = () => {
//   const [data, setData] = useState('Resizable Element');
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       interact(element).resizable({
//         edges: { top: true, left: true, bottom: true, right: true },
//         listeners: {
//           move: function (event) {
//             let { x, y } = event.target.dataset;

//             x = (parseFloat(x) || 0) + event.deltaRect.left;
//             y = (parseFloat(y) || 0) + event.deltaRect.top;

//             Object.assign(event.target.style, {
//               width: `${event.rect.width}px`,
//               height: `${event.rect.height}px`,
//               transform: `translate(${x}px, ${y}px)`,
//             });

//             Object.assign(event.target.dataset, { x, y });
//           },
//         },
//       });
//     }
//   }, []);

//   return (
//     <input onClick={(e) => {
//       setData(e.target.value)
//     }}
//       ref={resizableRef}
//       style={{
//         width: '100px',
//         height: '100px',
//         border: '1px solid #ccc',
//         position: 'absolute',
//         top: '50px',
//         left: '50px',
//       }}
    
//       Resizable Element
//     />
//   );
// };

// // export default ResizableElement;

// export default InputElement









// import React, { useEffect, useRef } from 'react';
// import interact from 'interactjs';

// const InputElement = () => {
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       let isResizing = false;

//       interact(element)
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//           listeners: {
//             start: () => {
//               isResizing = true;
//               interact(element).draggable({ enabled: false });
//             },
//             move: (event) => {
//               if (!isResizing) return;

//               let { x, y } = event.target.dataset;

//               x = (parseFloat(x) || 0) + event.deltaRect.left;
//               y = (parseFloat(y) || 0) + event.deltaRect.top;

//               Object.assign(event.target.style, {
//                 width: `${event.rect.width}px`,
//                 height: `${event.rect.height}px`,
//                 transform: `translate(${x}px, ${y}px)`,
//               });

//               Object.assign(event.target.dataset, { x, y });
//             },
//             end: () => {
//               isResizing = false;
//               interact(element).draggable({ enabled: true });
//             },
//           },
//         })
//         .draggable({
//           listeners: {
//             move: (event) => {
//               if (isResizing) return;

//               let { x, y } = event.target.dataset;

//               x = (parseFloat(x) || 0) + event.dx;
//               y = (parseFloat(y) || 0) + event.dy;

//               Object.assign(event.target.style, {
//                 transform: `translate(${x}px, ${y}px)`,
//               });

//               Object.assign(event.target.dataset, { x, y });
//             },
//           },
//         });
//     }
//   }, []);

//   return (
//     <div
//       ref={resizableRef}
//       style={{
//         width: '100px',
//         height: '100px',
//         border: '1px solid #ccc',
//         position: 'absolute',
//         top: '50px',
//         left: '50px',
//       }}
//     >
//       Resizable and Draggable Element
//     </div>
//   );
// };

// export default InputElement;




// import React, { useEffect, useRef, useState } from 'react';
// import interact from 'interactjs';

// const ResizableAndDraggableElement = () => {
//   const resizableRef = useRef(null);
//   const [text, setText] = useState('Resizable and Draggable Element');

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       let isResizing = false;

//       interact(element)
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//           listeners: {
//             start: () => {
//               isResizing = true;
//               interact(element).draggable({ enabled: false });
//             },
//             move: (event) => {
//               if (!isResizing) return;

//               let { x, y } = event.target.dataset;

//               x = (parseFloat(x) || 0) + event.deltaRect.left;
//               y = (parseFloat(y) || 0) + event.deltaRect.top;

//               Object.assign(event.target.style, {
//                 width: `${event.rect.width}px`,
//                 height: `${event.rect.height}px`,
//                 transform: `translate(${x}px, ${y}px)`,
//               });

//               Object.assign(event.target.dataset, { x, y });
//             },
//             end: () => {
//               isResizing = false;
//               interact(element).draggable({ enabled: true });
//             },
//           },
//         })
//         .draggable({
//           listeners: {
//             move: (event) => {
//               if (isResizing) return;

//               let { x, y } = event.target.dataset;

//               x = (parseFloat(x) || 0) + event.dx;
//               y = (parseFloat(y) || 0) + event.dy;

//               Object.assign(event.target.style, {
//                 transform: `translate(${x}px, ${y}px)`,
//               });

//               Object.assign(event.target.dataset, { x, y });
//             },
//           },
//         });
//     }
//   }, []);

//   return (
//     <input
//       ref={resizableRef}
//       style={{
//         width: '100px',
//         height: '100px',
//         border: '1px solid #ccc',
//         position: 'absolute',
//         top: '50px',
//         left: '50px',
//       }}
    
//       onClick={(e) => {
//         setText(e.target.value);
//       }}
//     />
//   );
// };

// export default ResizableAndDraggableElement;






// import React, { useEffect, useRef } from 'react';
// import interact from 'interactjs';
// import Draggable from 'react-draggable';

// const ResizableAndDraggableElement = () => {
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       let isResizing = false;

//       interact(element)
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//           listeners: {
//             start: () => {
//               isResizing = true;
//             },
//             move: (event) => {
//               if (!isResizing) return;

//               const { x, y } = event.target.dataset;

//               Object.assign(event.target.style, {
//                 width: `${event.rect.width}px`,
//                 height: `${event.rect.height}px`,
//                 transform: `translate(${x}px, ${y}px)`,
//               });
//             },
//             end: () => {
//               isResizing = false;
//             },
//           },
//         })
//         .draggable({
//           listeners: {
//             move: (event) => {
//               const { x, y } = event.target.dataset;

//               const containerWidth = element.parentElement.clientWidth;
//               const containerHeight = element.parentElement.clientHeight;

//               // Calculate boundaries
//               const maxX = containerWidth - event.rect.width;
//               const maxY = containerHeight - event.rect.height;

//               // Update position
//               const newX = Math.min(Math.max(parseFloat(x) || 0, 0), maxX);
//               const newY = Math.min(Math.max(parseFloat(y) || 0, 0), maxY);

//               Object.assign(event.target.style, {
//                 transform: `translate(${newX}px, ${newY}px)`,
//               });

//               Object.assign(event.target.dataset, { x: newX, y: newY });
//             },
//           },
//         });
//     }
//   }, []);

//   return (
//     // <Draggable bounds="parent">
//       <input
//         ref={resizableRef}
//         style={{
//           width: '100px',
//           height: '100px',
//           border: '1px solid #ccc',
//           position: 'absolute',
//           top: '50px',
//           left: '50px',
//         }}
//       />
//     // </Draggable>
//   );
// };

// export default ResizableAndDraggableElement;







// import React, { useEffect, useRef } from 'react';
// import interact from 'interactjs';

// const ResizableAndDraggableElement = () => {
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       let isResizing = false;

//       interact(element)
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//           listeners: {
//             start: () => {
//               isResizing = true;
//             },
//             move: (event) => {
//               if (!isResizing) return;

//               const { x, y } = event.target.dataset;

//               Object.assign(event.target.style, {
//                 width: `${event.rect.width}px`,
//                 height: `${event.rect.height}px`,
//                 transform: `translate(${x}px, ${y}px)`,
//               });
//             },
//             end: () => {
//               isResizing = false;
//             },
//           },
//         })
//         .draggable({
//           listeners: {
//             move: (event) => {
//               if (isResizing) return;

//               const { x, y } = event.target.dataset;

//               const containerWidth = element.parentElement.clientWidth;
//               const containerHeight = element.parentElement.clientHeight;

//               // Calculate boundaries
//               const maxX = containerWidth - event.rect.width;
//               const maxY = containerHeight - event.rect.height;

//               // Update position
//               const newX = Math.min(Math.max(parseFloat(x) || 0, 0), maxX);
//               const newY = Math.min(Math.max(parseFloat(y) || 0, 0), maxY);

//               Object.assign(event.target.style, {
//                 transform: `translate(${newX}px, ${newY}px)`,
//               });

//               Object.assign(event.target.dataset, { x: newX, y: newY });
//             },
//           },
//         });
//     }
//   }, []);

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <input
//         ref={resizableRef}
//         style={{
//           width: '100px',
//           height: '100px',
//           border: '1px solid #ccc',
//           position: 'absolute',
//           top: '50px',
//           left: '50px',
//         }}
//       />
//     </div>
//   );
// };

// export default ResizableAndDraggableElement;










// ///////////////////////////////Not working /////////////////

// import React, { useEffect, useRef } from 'react';
// import interact from 'interactjs';

// const InputElement = () => {
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       interact(element)
//         .draggable({
//           modifiers: [
//             interact.modifiers.restrict({
//               restriction: element.parentElement,
//               endOnly: true, // Only restrict during the drag end event
//             }),
//           ],
//           onmove: (event) => {
//             const { x, y } = event.target.dataset;

//             const newX = (parseFloat(x) || 0) + event.dx;
//             const newY = (parseFloat(y) || 0) + event.dy;

//             Object.assign(event.target.style, {
//               transform: `translate(${newX}px, ${newY}px)`,
//             });

//             Object.assign(event.target.dataset, { x: newX, y: newY });
//           },
//         })
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//           modifiers: [
//             interact.modifiers.restrict({
//               restriction: element.parentElement,
//             }),
//           ],
//           onmove: (event) => {
//             const { x, y } = event.target.dataset;

//             const newX = (parseFloat(x) || 0) + event.deltaRect.left;
//             const newY = (parseFloat(y) || 0) + event.deltaRect.top;

//             Object.assign(event.target.style, {
//               width: `${event.rect.width}px`,
//               height: `${event.rect.height}px`,
//               transform: `translate(${newX}px, ${newY}px)`,
//             });

//             Object.assign(event.target.dataset, { x: newX, y: newY });
//           },
//         });
//     }
//   }, []);

//   return (
//     <div
//       ref={resizableRef}
//       style={{
//         width: '100px',
//         height: '100px',
//         border: '1px solid #ccc',
//         position: 'absolute',
//         top: '50px',
//         left: '50px',
//       }}
//     >
//       Your content here
//     </div>
//   );
// };

// export default InputElement;


// import React, { useEffect, useRef } from 'react';
// import interact from 'interactjs';

// const InputElement = () => {
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       let isResizing = false;

//       interact(element)
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//            modifiers: [
//             interact.modifiers.restrict({
//               restriction: element.parentElement,
//             }),
//           ],
//           listeners: {
//             start: () => {
//               isResizing = true;
//             },
//             move: (event) => {
//               if (!isResizing) return;

//               const { x, y } = event.target.dataset;

//               Object.assign(event.target.style, {
//                 width: `${event.rect.width}px`,
//                 height: `${event.rect.height}px`,
//                 transform: `translate(${x}px, ${y}px)`,
//               });
//             },
//             end: () => {
//               isResizing = false;
//             },
//           },
//         })
//         .draggable({
//           listeners: {
//             move: (event) => {
//               if (isResizing) return;

//               const { x, y } = event.target.dataset;

//               const containerWidth = element.parentElement.clientWidth;
//               const containerHeight = element.parentElement.clientHeight;

//               // Calculate boundaries
//               const maxX = containerWidth - event.rect.width;
//               const maxY = containerHeight - event.rect.height;

//               // Update position
//               const newX = Math.min(Math.max(parseFloat(x) || 0, 0), maxX);
//               const newY = Math.min(Math.max(parseFloat(y) || 0, 0), maxY);

//               Object.assign(event.target.style, {
//                 transform: `translate(${newX}px, ${newY}px)`,
//               });

//               Object.assign(event.target.dataset, { x: newX, y: newY });
//             },
//           },
//         });
//     }
//   }, []);

//   return (
//     <div
//       ref={resizableRef}
//       style={{
//         width: '100px',
//         height: '100px',
//         border: '1px solid #ccc',
//         position: 'absolute',
//         top: '50px',
//         left: '50px',
//       }}
//     >
//       Your content here
//     </div>
//   );
// };

// export default InputElement;





/////////////////////////SOMEHOW WORKING CODE /////////////////////////////////////


// import React, { useEffect, useRef } from 'react';
// import interact from 'interactjs';

// const InputElement = () => {
//   const resizableRef = useRef(null);

//   useEffect(() => {
//     const element = resizableRef.current;

//     if (element) {
//       let isResizing = false;

//       interact(element)
//         .resizable({
//           edges: { top: true, left: true, bottom: true, right: true },
//           modifiers: [
//             interact.modifiers.restrictRect({
//               restriction: 'parent',
//               endOnly:true,
//             })
//           ],
//           listeners: {
//             start: () => {
//               isResizing = true;
//             },
//             move: (event) => {
//               if (!isResizing) return;

//               const { x, y } = event.target.dataset;

//               Object.assign(event.target.style, {
//                 width: `${event.rect.width}px`,
//                 height: `${event.rect.height}px`,
//                 transform: `translate(${x}px, ${y}px)`,
//               });
//             },
//             end: () => {
//               isResizing = false;
//             },
           
//           },
          
//         })
//         .draggable({
//            modifiers: [
//             interact.modifiers.restrictRect({
//               restriction: 'parent',
//               endOnly:true,
//             })
//           ],
          
//           listeners: {
//             move: (event) => {
//               if (isResizing) return;

//               const { x, y } = event.target.dataset;

//               const containerWidth = element.parentElement.clientWidth;
//               const containerHeight = element.parentElement.clientHeight;

//               // Calculate boundaries
//               const maxX = containerWidth - element.clientWidth;
//               const maxY = containerHeight - element.clientHeight;

//               console.log("CH", containerHeight);
//               console.log("CW", containerWidth);

//               // Update position
//               const newX = Math.min(Math.max(parseFloat(x) || 0, 0), maxX);
//               const newY = Math.min(Math.max(parseFloat(y) || 0, 0), maxY);

//               console.log("X", newX);
//               console.log("Y", newY);
//               Object.assign(event.target.style, {
//                 transform: `translate(${newX}px, ${newY}px)`,
//               });

//               Object.assign(event.target.dataset, { x: newX, y: newY });
//             },
//             restrict: {
//             drag:'self',
//               // {drag: 'self'},
//                 elementRect: {top: 0, left: 0, bottom: 1, right: 1}
//             },
            
//           },
//         });
//     }
//   }, []);

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <input
//         ref={resizableRef}
//         style={{
//           width: '100px',
//           height: '100px',
//           border: '1px solid #ccc',
//           position: 'absolute',
//           top: '50px',
//           left: '50px',
//         }}
//       />
//     </div>
//   );
// };

// export default InputElement;





///////////////////////////////////NEW CODE /////////////////////



import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';

const InputElement = () => {
   const resizableRef = useRef(null);

  useEffect(() => {
   
    const element = resizableRef.current;

    if (element) {
      let isResizing = false;
        console.log('resize : ',element),
      interact(element)
        
        .resizable({
          
          edges: { top: true, left: true, bottom: true, right: true },
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'parent',
              endOnly: true,
            }),
          ],
          listeners: {
            start: () => {
              isResizing = true;
            },
            move: (event) => {
              if (!isResizing) return;

              const { x, y } = event.target.dataset;

              Object.assign(event.target.style, {
                width: `${event.rect.width}px`,
                height: `${event.rect.height}px`,
                transform: `translate(${x}px, ${y}px)`,
              });
            },
            end: () => {
              isResizing = false;
            },
          },
        })
        .draggable({
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'parent',
              endOnly: true,
            }),
          ],
          listeners: {
            move: (event) => {
              console.log('listeners : ',event);
              if (isResizing) return;

              const { x, y } = event.target.dataset;

              const containerWidth = element.parentElement.clientWidth;
              const containerHeight = element.parentElement.clientHeight;

              // Calculate boundaries
              const maxX = containerWidth - element.clientWidth;
              const maxY = containerHeight - element.clientHeight;

              // Update position
              const newX = Math.min(Math.max(parseFloat(x) || 0, 0), maxX);
              const newY = Math.min(Math.max(parseFloat(y) || 0, 0), maxY);

              Object.assign(event.target.style, {
                transform: `translate(${newX}px, ${newY}px)`,
              });

              Object.assign(event.target.dataset, { x: newX, y: newY });
            },
            restrict: {
              drag: 'self',
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            },
          },
        });
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <input
        ref={resizableRef}
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid #ccc',
          position: 'absolute',
          top: '50px',
          left: '50px',
        }}
      />
    </div>
  );
};

export default InputElement;
