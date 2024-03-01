
import { useState, useContext, useEffect } from 'react';
import InputElement3 from './InputElement3';

import { AppContext } from '../layout';

const RangeSlider = ({func, set,text}) => {
  const { initialState, setInitialState } = useContext(AppContext);
  const [sliderValue, setSliderValue] = useState(20);

  useEffect(() => {
    if (text && text.fontSize) {
      setSliderValue(text.fontSize);
    }
  }, [text]);
  useEffect(() => {
     set((prev) => ({
       ...prev,
      fontSize:sliderValue,
     }));
    setInitialState((prev) => ({
      ...prev,
      sliderValue:sliderValue,
    }))
   
  }, [sliderValue]);

  const updateSliderValue = (event) => {
     
    setSliderValue(event.target.value);
    setInitialState((prev) => ({
      ...prev,
      sliderValue:sliderValue,
    }));
    func();
     
  };

  const sliderTrackStyle = {
    background: `linear-gradient(90deg, #4299e1 ${sliderValue}%, #ccc ${sliderValue}%, #ccc)`,
  };

  return (
    <div className="flex items-center space-x-4  w-[250px]">
      <input
        className="appearance-none w-[180px] h-1 rounded-md outline-none bg-gray-300"
        type="range"
        value={sliderValue}
        min="0"
        max="100"
        onChange={updateSliderValue}
        style={sliderTrackStyle}
      />
      <span className="text-blue-600   font-semibold">{sliderValue}</span>

    
    </div>
  );
};

export default RangeSlider;






