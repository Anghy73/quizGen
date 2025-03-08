import { create } from "zustand"

export const useQuizStore = create((set, get) => ({
  questions: [
    {
      "id": 1,
      "question": "What is the output of print(3 * '3')?",
      "correctAnswer": "333",
      "options": [
        "3",
        "33",
        "333",
        "Error"
      ]
    },
    {
      "id": 2,
      "question": "What is the output of print(dasdasdsad3 * '3')?",
      "correctAnswer": "333",
      "options": [
        "3",
        "33",
        "333",
        "Error"
      ]
    },
    {
      "id": 3,
      "question": "What is the output of print(32222 * '3')?",
      "correctAnswer": "333",
      "options": [
        "3",
        "33",
        "333",
        "Error"
      ]
    }
  ],
  currentQuestion: 0,
  getQuestions: async (category) => {
    // console.log('yes');
    // console.log(category);
    // console.log(`${import.meta.env.VITE_URL}${category}`);

    try {
      const res = await fetch(`${import.meta.env.VITE_URL}${category}`)
      const questions = await res.json()
      console.log(questions);
      set({ questions })
    } catch (error) {
      console.log(error);
    }
  },
  aswerUser: (question, answerIndex) => {
    const { questions } = get()
    let answerCorrect = question.options.findIndex(opt => opt == question.correctAnswer)

    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex(quest => quest.id == question.id)

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
  }
}))