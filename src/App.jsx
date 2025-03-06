import { Zenitho } from "uvcanvas"
import { InputCategory } from "./components/InputCategory"
import { ListCategories } from "./components/ListCategories"

function App () {

  return (
    <>
      <div className="w-screen h-screen relative">
        <Zenitho />
        <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-[#0008] backdrop-blur-xl flex flex-col justify-center items-center">
          <h1 className="font-lexend text-white font-bold text-8xl mb-15 drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.9)]">QuizGen</h1>
          <InputCategory></InputCategory>
          <ListCategories></ListCategories>
        </div>
      </div>
    </>
  )
}

export default App
