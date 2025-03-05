import { Lumiflex } from "uvcanvas"

function App () {

  return (
    <>
      <div className="w-screen h-screen relative">
        <Lumiflex />
        <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-[#0004] backdrop-blur-xl flex justify-center items-center">
          <h1 className="font-lexend text-white font-bold text-5xl">QuizGen</h1>
        </div>
      </div>
    </>
  )
}

export default App
