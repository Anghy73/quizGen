import { useQuizStore } from "../store/useQuizStore";

export const Question = ({ questInfo, questIndex }) => {
  const aswerUser = useQuizStore(state => state.aswerUser)

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
      {/* bg-neutral-900 bg-slate-900 bg-zinc-900 bg-gray-900 */}
      <div className="bg-neutral-900 p-3 rounded-xl flex flex-col justify-center items-center border-2 border-neutral-500">
        <div className="mt-6">
          <p className="text-md">Question <span className="font-bold text-amber-400">{questIndex}</span></p>
        </div>
        <p className="mt-4 text-cyan-500 text-lg">{questInfo.question}</p>
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
      </div>
    </div>
  )
}

export const Quiz = () => {
  const questions = useQuizStore(state => state.questions)
  const currentQuestion = useQuizStore(state => state.currentQuestion)

  const questionInfo = questions[currentQuestion]
  console.log(questionInfo);

  return (
    <>
      <header className="relative flex justify-center items-center w-full">
        {/* <span className="absolute top-auto left-10 text-white font-bold text-lg">Issue</span> */}
        <h1 className="text-white font-bold text-6xl drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.9)]">QuizGen</h1>
      </header>
      <Question questInfo={questionInfo} questIndex={currentQuestion}></Question>
    </>
  )
}