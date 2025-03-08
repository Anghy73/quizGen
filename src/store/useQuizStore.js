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
    }
  ],
  currentQuestion: 0,
  getQuestions: async (category) => {
    console.log('yes');
    console.log(category);
    console.log(`${import.meta.env.VITE_URL}${category}`);

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
    let correctAswer = false
    let answerCorrect = question.options.findIndex(opt => opt == question.correctAnswer)

    if (question.correctAnswer == question.options[answerIndex]) {
      correctAswer = true
    }

    console.log(question);
    console.log(answerIndex);

    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex(quest => quest.id == question.id)
    console.log(newQuestions);
    console.log(questionIndex);

    newQuestions[questionIndex] = {
      ...question,
      IsAnswerCorrect: correctAswer,
      answerCorrect: answerCorrect,
      answerUser: answerIndex
    }
    

    set({ questions: newQuestions })
  }
}))