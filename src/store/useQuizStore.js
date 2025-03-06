import { create } from "zustand"

export const useQuizStore = create((set, get) => ({
  questions: [],
  getQuestions: async () => {
    try {
      const res = await fetch("url")
      console.log(res);
      // const apiKey = process.env.VITE_URL;
      // console.log(apiKey);
      
    } catch (error) {
      console.log(error);
    }
  }
}))