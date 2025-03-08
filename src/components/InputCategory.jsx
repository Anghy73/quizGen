import { useState } from "react";
import { search } from "../icons/search"
import { useQuizStore } from "../store/useQuizStore";
import { BounceLoader } from "react-spinners";

export const InputCategory = () => {
  const getQuestions = useQuizStore(state => state.getQuestions)
  const loading = useQuizStore(state => state.loading)

  const [category, setCategory] = useState('')

  const handleCategory = (elem) => {
    setCategory(elem.target.value)
  }

  const handleGetQuestions = async () => {
    getQuestions(category)
  }
  
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-white mt-2">
      <p className="text-xl max-w-xl text-center">A quiz generator based on any category you want. It may take a while to generate the questions</p>
      <div className="w-full flex justify-center">
        <input onChange={handleCategory} className="bg-white text-black px-4 py-2 rounded-2xl rounded-br-none rounded-tr-none outline-0 w-full max-w-lg border-2 border-r-0 placeholder:text-neutral-400" type="text" placeholder="Example: Programing, Anime, Boxing" value={category} />
        <button
          onClick={handleGetQuestions}
          className="bg-white text-black px-4 py-2 rounded-2xl rounded-bl-none rounded-tl-none cursor-pointer border-2">
            {
              loading ? <BounceLoader size="30px" color="#36d6d1"></BounceLoader> : search()
            }
        </button>
      </div>
      <p className="text-xl mb-4 max-w-xl text-center">Write the category you want or select one of the ones we have pre-written for you.</p>
    </div>
  )
}