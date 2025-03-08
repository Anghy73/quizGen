import { useQuizStore } from "../store/useQuizStore";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { Footer } from "./Footer";

export const Question = ({ questInfo, questIndex }) => {
  const aswerUser = useQuizStore(state => state.aswerUser)
  const goToNext = useQuizStore(state => state.goToNext)
  const goToBack = useQuizStore(state => state.goToBack)

  const getBgColor = (index) => {
    if (questInfo.answerUser == null) return 'transparent'
    if (index !== questInfo.answerCorrect && index !== questInfo.answerUser) return 'transparent'
    if (index === questInfo.answerCorrect) return 'green'
    if (index === questInfo.answerUser) return 'red'
    return 'transparent'
  }

  const handleAswer = (answerIndex) => () => {
    aswerUser(questInfo, answerIndex)
  }

  return (
    <div className="text-white w-full max-w-xl mt-20">
      <div className="bg-neutral-900 p-3 rounded-xl flex flex-col justify-center items-center border-2 border-neutral-500">
        <div className="mt-6 flex justify-center items-center gap-3">
          <button onClick={() => goToBack()} className="hover:bg-neutral-800 p-2 rounded-xl cursor-pointer">
            <FaLessThan></FaLessThan>
          </button>
          <p className="text-md">Question <span className="font-bold text-amber-400">{questIndex + 1}</span></p>
          <button onClick={() => goToNext()} className="hover:bg-neutral-800 p-2 rounded-xl cursor-pointer">
            <FaGreaterThan></FaGreaterThan>
          </button>
        </div>
        <p className="mt-4 text-cyan-500 text-lg text-center">{questInfo.question}</p>
        <div className="flex flex-col gap-2 justify-center items-center my-10 w-full">
          {
            questInfo.options.map((quest, index) => (
              <button
                onClick={handleAswer(index)}
                disabled={questInfo.answerCorrect ? true : false}
                style={{ backgroundColor: getBgColor(index) }}
                className="w-full max-w-2xs border-2 border-neutral-400 rounded-2xl py-1 cursor-pointer"
                key={index} >{quest}</button>
            ))
          }
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export const Quiz = () => {
  const questions = useQuizStore(state => state.questions)
  const currentQuestion = useQuizStore(state => state.currentQuestion)
  const category = useQuizStore(state => state.category)
  const reset = useQuizStore(state => state.reset)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <header className="relative flex justify-center items-center w-full">
        <span className="absolute top-auto left-10 text-white font-bold text-3xl"><span className="text-amber-300">~</span> {category} <span className="text-amber-300">~</span></span>
        <h1 onClick={() => reset()} className="cursor-pointer text-white font-bold text-6xl drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.9)]">QuizGen</h1>
      </header>
      <Question questInfo={questionInfo} questIndex={currentQuestion}></Question>
    </>
  )
}