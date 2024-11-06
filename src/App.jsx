import { useState } from "react"

function App(){
 const [color,setcolor] = useState("white")
  return (
    <div className=" w-full h-screen duration-200"
    style={{backgroundColor: color}}><div className="fixed  flex  flex-wrap  justify-center  bottom-12  inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button onClick={() => setcolor("green")}  className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "green"}}>Green</button>
       <button onClick={() => setcolor("red")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "red"}}>Red</button>
       <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "blue"}}>Blue</button>
       <button onClick={() => setcolor("olive")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "olive"}}>Olive</button>
       <button onClick={() => setcolor("white")} className="outline-none px-4 py-1 text-black rounded-full shadow-lg"  style={{backgroundColor: "white"}}>White</button>
       <button onClick={() => setcolor("black")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "black"}}>Black</button>
       <button onClick={() => setcolor("yellow")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "yellow"}}>Yellow</button>
       <button onClick={() => setcolor("brown")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "brown"}}>Brown</button>
       <button onClick={() => setcolor("silver")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "silver"}}>Silver</button>
       <button onClick={() => setcolor("Purple")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"  style={{backgroundColor: "Purple"}}>Purple</button>
     
      </div>
    </div>
    </div>
  )
}

export default App
