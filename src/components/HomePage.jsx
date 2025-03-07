import { InputCategory } from "./InputCategory"
import { ListCategories } from "./ListCategories"


export const HomePage = () => {
  return (
    <>
      <h1 className="font-lexend text-white font-bold text-8xl mb-15 drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.9)]">QuizGen</h1>
      <InputCategory />
      <ListCategories />
    </>

  )
}