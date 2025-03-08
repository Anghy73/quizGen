import { HomePage } from "./components/HomePage";
import { useQuizStore } from "./store/useQuizStore";
import { Quiz } from "./components/Quiz";
import { Zenitho } from "uvcanvas";

function App() {
  const questions = useQuizStore(state => state.questions)

  return (
    <div className="w-screen h-screen relative">
      <Zenitho />
      <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-[#0008] backdrop-blur-xl flex flex-col justify-center items-center">
        {
          questions.length !== 0 ? <Quiz /> : <HomePage />
        }
      </div>
    </div>
  )
}

export default App
