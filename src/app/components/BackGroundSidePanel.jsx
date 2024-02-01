import React from 'react'
import CrossIcon from './icons/CrossIcon';
import ColorPicker from './ColorPicker'
import { AppContext } from '../layout';
import { useContext } from 'react';

function BackGroundSidePanel() {

const { initialState, setInitialState } = useContext(AppContext);
  const handleColorChange = (color) => {
    console.log("Selected color In BackGroundColor :", color);

    setInitialState((prev) => ({
      ...prev,
      bgColor: color,
    }));
  };
  return (
    <div>
      <div className="flex">
        <p>BackGround</p>

        <CrossIcon />
      </div>
      <div>
        <ColorPicker layout={[]} onColorChange={handleColorChange} />
      </div>

      <div>
        {/* Icon of Upload bg */}

        <p>Upload background</p>
      </div>
    </div>
  );
}

export default BackGroundSidePanel
