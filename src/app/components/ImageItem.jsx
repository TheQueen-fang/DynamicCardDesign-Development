import React, { useEffect, useState } from 'react';
import interact from 'interactjs';
import Draggable from 'react-draggable';

// function ImageItem({ image }) {
//   useEffect(() => {
//     const resizeMoveHandler = (event) => {
//       const target = event.target;
//       const x = parseFloat(target.getAttribute('data-x')) || 0;
//       const y = parseFloat(target.getAttribute('data-y')) || 0;

//       target.style.width = event.rect.width + 'px';
//       target.style.height = event.rect.height + 'px';

//       target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`;
//       target.style.objectFit = 'cover';
//       target.style.backgroundRepeat = 'no-repeat';
//     };

//     interact('.image-item')
//       .draggable({
//         modifiers: [
//           interact.modifiers.restrictRect({
//             restriction: 'parent',
//           }),
//         ],
//         inertia: true,
//       })
//       .resizable({
//         edges: { left: true, right: true, bottom: true, top: true },
//         restrictEdges: {
//           outer: 'parent',
//           endOnly: true,
//         },
//         restrictSize: {
//           min: { width: 100, height: 100 },
//         },
//       })
//       .on('resizemove', resizeMoveHandler);

//     return () => {
//       interact('.image-item').unset();
//     };
//   }, []); // Run this effect only once

//   return (
//     <Draggable>
//       <div className='image-item object-fill bg-no-repeat z-0 m-2'>
//         <img
//           src={image}
//           alt={`Selected Image`}
//           className="z-0 w-full h-full object-cover  m-2"
//         />
//       </div>
//     </Draggable>
//   );
// }

// export default ImageItem;






// import React, { useState, useEffect } from 'react';
// import interact from 'interactjs';

// function ImageItem({image}) {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const resizeMoveHandler = (event) => {
//       const target = event.target;
//       const rect = target.getBoundingClientRect();
//       const x = parseFloat(target.getAttribute('data-x')) || 0;
//       const y = parseFloat(target.getAttribute('data-y')) || 0;

//       // update the element's style
//       target.style.width = event.rect.width + 'px';
//       target.style.height = event.rect.height + 'px';

//       // translate when resizing from top or left edges
//       target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`;
//     };

//     // Set up Interact.js for drag and resize
//     interact('.upload-container')
//       .draggable({
//         modifiers: [
//           interact.modifiers.restrictRect({
//             restriction: 'parent',
//           }),
//         ],
//         inertia: true,
//       })
//       .resizable({
//         edges: { left: true, right: true, bottom: true, top: true },
//         restrictEdges: {
//           outer: 'parent',
//           endOnly: true,
//         },
//         restrictSize: {
//           min: { width: 100, height: 100 },
//         },
//       })
//       .on('resizemove', resizeMoveHandler);

//     // Cleanup the interaction when component unmounts
//     return () => {
//       interact('.upload-container').unset();
//     };
//   }, []); // Run this effect only once

//   const handleImageChange = (event) => {
//     if (event?.target?.files?.length > 0) {
//       const file = event.target.files[0];
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         setImageSrc(e.target.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     // border: '1px solid #ccc' insode style
//     //style={{ position:'absolute',  }}
//     <div className="upload-container   absolute z-2">
//       <input
//         type="file"
//         accept="image/*"
//         // className='none'
//         style={{ display: 'none' }}
//         onChange={handleImageChange}
//         id="imageInput"
//       />
//       <label htmlFor="imageInput">
//         {/* Your Add Image component here */}
//       </label>

//       {imageSrc && (
//         <div className='overflow-hidden z-0'>
//           <img
//             src={imageSrc}
//             alt="Selected Image"
//             className="z-0  w-full h-full  object-cover"
//             // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Upload;






// import React, { useState, useEffect } from 'react';
// import interact from 'interactjs';
// import Draggable from 'react-draggable';

// function ImageItem({ image }) {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const resizeMoveHandler = (event) => {
//       const target = event.target;
//       const rect = target.getBoundingClientRect();
//       const x = parseFloat(target.getAttribute('data-x')) || 0;
//       const y = parseFloat(target.getAttribute('data-y')) || 0;

//       // Update the element's style
//       target.style.width = event.rect.width + 'px';
//       target.style.height = event.rect.height + 'px';

//       // Translate when resizing from top or left edges
//       target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`;
//     };

//     // Set up Interact.js for drag and resize
//     interact('.image-item')
//       .draggable({
//         modifiers: [
//           interact.modifiers.restrictRect({
//             restriction: 'parent',
//           }),
//         ],
//         inertia: true,
//       })
//       .resizable({
//         edges: { left: true, right: true, bottom: true, top: true },
//         restrictEdges: {
//           outer: 'parent',
//           endOnly: true,
//         },
//         restrictSize: {
//           min: { width: 100, height: 100 },
//         },
//       })
//       .on('resizemove', resizeMoveHandler);

//     // Cleanup the interaction when component unmounts
//     return () => {
//       interact('.image-item').unset();
//     };
//   }, []); // Run this effect only once

//   useEffect(() => {
//     setImageSrc(image);
//   }, [image]);

//   return (
//     <Draggable>
//       <div className="image-item overflow-hidden z-0  w-full h-full">
//         {imageSrc && (
//           <img
//             src={imageSrc}
//             alt="Selected Image"
//             className="z-0 w-full h-full object-cover"
//           />
//         )}
//       </div>
//     </Draggable>
//   );
// }

// export default ImageItem;









function ImageItem({ image }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const resizeMoveHandler = (event) => {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      const x = parseFloat(target.getAttribute('data-x')) || 0;
      const y = parseFloat(target.getAttribute('data-y')) || 0;

      // update the element's style
      target.style.width = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      // translate when resizing from top or left edges
      target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`;
    };

    // Set up Interact.js for drag and resize
    interact('.upload-container')
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
        ],
        inertia: true,
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },
        restrictSize: {
          min: { width: 100, height: 100 },
        },
      })
      .on('resizemove', resizeMoveHandler);

    // Cleanup the interaction when component unmounts
    return () => {
      interact('.upload-container').unset();
    };
  }, []); // Run this effect only once

  const handleImageChange = (event) => {
    if (event?.target?.files?.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setImageSrc(image);
  }, [image]);

  return (
    <div className="upload-container absolute z-2">
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        {/* Your Add Image component here */}
      </label>

      {imageSrc && (
        <div className='overflow-hidden z-0'>
          <img
            src={imageSrc}
            alt="Selected Image"
            className="z-0 w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ImageItem;

