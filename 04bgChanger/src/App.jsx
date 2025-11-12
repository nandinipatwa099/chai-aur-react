import {useState} from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>  {/* outer container div*/}
     
     {/* bottom bar  */}
    <div className="fixed flex flex-wrap  justify-center items-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center items-center gap-3  shadow-lg bg-white px-3 py-2 rounded-xl">


        {/* // paasing callback to button to setcolor , onClick wants function not return value or parameters*/}
        < button onClick={() => {setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "red"}} >Red</button>

        

        < button onClick={() => {setcolor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "black"}} >Black</button>

        < button onClick={() => {setcolor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "pink"}} >Pink</button>

        < button onClick={() => {setcolor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "blue"}} >Blue</button>

        < button onClick={() => {setcolor("purple")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "purple"}} >Purple</button>

        < button onClick={() => {setcolor("yellow")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "yellow"}} >Yellow</button>

        < button onClick={() => {setcolor("lavender")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "lavender"}} >Lavender</button>

        < button onClick={() => {setcolor("orange")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "orange"}} >Orange</button>

        < button onClick={() => {setcolor("green")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "green"}} >Green</button>

        < button onClick={() => {setcolor("brown")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "brown"}} >Brown</button>

      </div>
    </div>

   </div>
  )
}

export default App
