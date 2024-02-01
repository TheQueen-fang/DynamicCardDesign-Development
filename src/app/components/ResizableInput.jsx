import React, { useRef, useEffect } from 'react';
import interact from 'interactjs';

const ResizableInput = () => {
  const resizableDraggableRef = useRef(null);

  useEffect(() => {
    const resizableDraggableElement = resizableDraggableRef.current;

    interact(resizableDraggableElement)
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const target = event.target;
            const x = parseFloat(target.getAttribute('data-x')) || 0;
            const y = parseFloat(target.getAttribute('data-y')) || 0;

            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // Use event.deltaRect instead of event.rect.deltaRect
            const newX = x + event.deltaRect.left;
            const newY = y + event.deltaRect.top;

            target.style.transform = `translate(${newX}px, ${newY}px)`;

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            target.textContent = `${Math.round(event.rect.width)}×${Math.round(event.rect.height)}`;
          },
        },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: 'parent',
          }),
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],
        inertia: true,
      })
      .draggable({
        listeners: {
          move(event) {
            const target = event.target;
            const x = parseFloat(target.getAttribute('data-x')) || 0 + event.dx;
            const y = parseFloat(target.getAttribute('data-y')) || 0 + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
        },
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ],
      });
  }, []);

  return (
    <div
      className="resize-drag bg-blue-500 text-white rounded-lg p-5 m-4 font-sans"
      ref={resizableDraggableRef}
    >
      Resize from any edge or corner
    </div>
  );
};

export default ResizableInput;
