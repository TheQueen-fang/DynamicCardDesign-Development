'use client'
import { Inter } from 'next/font/google'
import './globals.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

function setData(){

}

export default function RootLayout({ children }) {

  const [initialState, setInitialState] = useState({
    bold: false,
    italic: false,
    underline: false,
    textStrike: false,
    sliderValue: 20,
    color: "#000000",
    alignL: false,
    alignC: false,
    alignR: false,
    bgColor: "white",
    qrColor: "white",
    background: false,
    bgImage: false,
    qrPanel: false,
    qrColor: "#000000",
    qr: false,
    backgroundImage:null,
  });
  return (
    <html lang="en">
      {/* <body className={inter.className}>
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      </body> */}

      <body className={inter.className}>
        <AppContext.Provider value={{ initialState, setInitialState }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
export { AppContext };
