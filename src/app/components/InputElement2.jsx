import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Resizable } from 'react-resizable';

const DraggableDiv = ({ children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
  }));

  return (
    <div
      ref={drag}
      style={{
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
};

const ResizableDiv = ({ width, height, onResize, children }) => {
  return (
    <Resizable width={width} height={height} onResize={onResize}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '1px solid #ccc',
        }}
      >
        {children}
      </div>
    </Resizable>
  );
};

const InputElement2 = () => {
  const ref = useRef(null);
  const [size, setSize] = React.useState({ width: 200, height: 100 });

  return (
    <DraggableDiv>
      <ResizableDiv
        width={size.width}
        height={size.height}
        onResize={(e, { size }) => setSize(size)}
      >
        <input
          ref={ref}
          style={{
            width: '100%',
            height: '100%',
            outline: 'none',
            border: 'none',
            padding: '5px',
            boxSizing: 'border-box',
          }}
        />
      </ResizableDiv>
    </DraggableDiv>
  );
};

export default InputElement2;
