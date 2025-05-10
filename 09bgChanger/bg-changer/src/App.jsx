import React from 'react'
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : bgColor}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            className='flex justify-center items-center px-4 py-1 rounded-full shadow-lg outline-none'
            style={{backgroundColor : "crimson", color : 'white'}}
            onClick={() => setBgColor("crimson")}
          >Red</button>
          <button 
            className='flex justify-center items-center px-4 py-1 rounded-full shadow-lg outline-none'
            style={{backgroundColor : "cyan", color : 'blue'}}
            onClick={() => setBgColor("cyan")}
          >Cyan</button>
          <button 
            className='flex justify-center items-center px-4 py-1 rounded-full shadow-lg outline-none'
            style={{backgroundColor : "Green", color : 'white'}}
            onClick={() => setBgColor("green")}
          >Green</button>
          <button 
            className='flex justify-center items-center px-4 py-1 rounded-full shadow-lg outline-none'
            style={{backgroundColor : "blue", color : 'white'}}
            onClick={() => setBgColor("blue")}
          >Blue</button>
          <button 
            className='flex justify-center items-center px-4 py-1 rounded-full shadow-lg outline-none'
            style={{backgroundColor : "white", color : 'black'}}
            onClick={() => setBgColor("#fff")}
          >White</button>
        </div>
      </div>
    </>
  )
}

export default App
