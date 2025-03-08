import { create } from "zustand"
import confetti from 'canvas-confetti'

export const useQuizStore = create((set, get) => ({
  questions: [],
  currentQuestion: 0,
  category: '',
  loading: false,
  getQuestions: async (category) => {
    set({ loading: true })
    set({ category: category  })

    try {
      const res = await fetch(`${import.meta.env.VITE_URL}${category}`)
      const questions = await res.json()
      if (questions.questions) {
        set({ loading: false })
      }
      
      set({ questions: questions.questions })
    } catch (error) {
      console.log(error);
    }
  },
  aswerUser: (question, answerIndex) => {
    const { questions } = get()
    let answerCorrect = question.options.findIndex(opt => opt == question.correctAnswer)
    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex(quest => quest.id == question.id)
    if (answerIndex == answerCorrect) confetti()

    newQuestions[questionIndex] = {
      ...question,
      answerCorrect: answerCorrect,
      answerUser: answerIndex
    }

    set({ questions: newQuestions })
  },
  goToNext: () => {
    const { currentQuestion, questions } = get()
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      set({ currentQuestion: nextQuestion })
    }
  },
  goToBack: () => {
    const { currentQuestion } = get()
    const previousQuestion = currentQuestion - 1

    if (previousQuestion >= 0) {
      set({ currentQuestion: previousQuestion })
    }
  },
  reset: () => {
    set({ questions: [], currentQuestion: 0 })
  }
}))