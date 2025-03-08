import { useDataQuestion } from '../hooks/useDataQuestion'

export const Footer = () => {
  const {correct, incorrect, unanswered} = useDataQuestion()
  
  return (
    <div className="flex gap-6 mb-5">
      <p className="text-green-400">correct: <span className='text-amber-400'>{correct}</span></p>
      <p className="text-red-400">Incorrect: <span className='text-amber-400'>{incorrect}</span></p>
      <p className="text-blue-400">Total: <span className='text-amber-400'>{unanswered}</span></p>
    </div>
  )
}