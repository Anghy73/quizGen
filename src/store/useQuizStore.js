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



    const questions = get()

    try {
      const res = await fetch(`${import.meta.env.VITE_URL}${category}`)
      const json = await res.json()
      console.log(json);
      set({ questions: questions })
    } catch (error) {
      console.log(error);
    }
  }
}))