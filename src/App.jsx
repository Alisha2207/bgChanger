import { useState } from "react"


function App() {
  const [color, setColor] = useState("#DFC5FE")

  return (
    <>
    <div className="w-full h-screen duration-200 flex flex-col  justify-center items-center" style={{backgroundColor:color}}>

<h1 className="text-center text-4xl text-white font-bold italic mb-8">Play with colors!!</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixex flex flex-wrap shadow-lg justify-center gap-4 rounded-3xl bg-white p-2">
        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>
          Red
        </button>

        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>
          Green
        </button>

        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>
          Blue
        </button>

        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"#b33b72"}} onClick={()=>{setColor("#b33b72")}}>
          Pink
        </button>

        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"Yellow"}} onClick={()=>{setColor("Yellow")}}>
          Yellow
        </button>

        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"#4B0082"}} onClick={()=>{setColor("#4B0082")}}>
         Purple
        </button>

        
        <button className="px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor:"#FFA500"}} onClick={()=>{setColor("#FFA500")}}>
         Lavender
        </button>
  
  
       </div>

      </div>

    </div>
      
    </>
  )
}

export default App
