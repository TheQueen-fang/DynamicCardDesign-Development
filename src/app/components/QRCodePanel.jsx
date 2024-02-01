import React from 'react'

function QRCodePanel() {

  const handleColorChange = (color) => {
    console.log("Selected color In QR:", color);

    setInitialState((prev) => ({
      ...prev,
      qrColor: color,
    }));
  };
  return (
    <div>
      <div className="flex">
        <p>QR Code</p>

        <CrossIcon />
      </div>
      <div>
        <ColorPicker layout={[]} onColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default QRCodePanel
