import { useDataQuestion } from '../hooks/useDataQuestion'
import { useQuizStore } from '../store/useQuizStore'

export const Footer = () => {
  const reset = useQuizStore(state => state.reset)
  const { correct, incorrect, unanswered } = useDataQuestion()

  return (
    <>
      <div className="flex gap-6 mb-5">
        <p className="text-green-400">correct: <span className='text-amber-400'>{correct}</span></p>
        <p className="text-red-400">Incorrect: <span className='text-amber-400'>{incorrect}</span></p>
        <p className="text-blue-400">Total: <span className='text-amber-400'>{unanswered}</span></p>
      </div>
      <button onClick={() => reset()} className='mb-5 border-2 w-full max-w-xs rounded-2xl py-2 cursor-pointer hover:bg-neutral-800'>Menu</button>
    </>
  )
}