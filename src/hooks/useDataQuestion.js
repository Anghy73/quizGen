import { useQuizStore } from "../store/useQuizStore";

export const useDataQuestion = () => {
  const questions = useQuizStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(quest => {
    const { answerUser, answerCorrect } = quest
    if (answerUser == null) unanswered++
    else if (answerUser == answerCorrect) correct++
    else incorrect++
  });

  return {
    correct,
    incorrect,
    unanswered
  }
}