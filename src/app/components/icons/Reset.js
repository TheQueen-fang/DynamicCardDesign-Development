import Image from 'next/image'
import React from 'react'
import resetImg from "../../../../public/reset.png";

function Reset() {
  return (
    <Image src={resetImg} alt="Description of the image" width={35} height={40} />
  )
}

export default Reset
