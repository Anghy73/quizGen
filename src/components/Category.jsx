import { useState } from "react";
import { useQuizStore } from "../store/useQuizStore";

export const Category = ({ cate }) => {
  const getQuestions = useQuizStore(state => state.getQuestions)
  const loading = useQuizStore(state => state.loading)
  const [hover, setHover] = useState(false)

  const styles = {
    color: cate.color,
    backgroundColor: cate.color + '33',
    borderColor: cate.color + '44'
  }

  const stylesHover = {
    color: cate.color,
    backgroundColor: cate.color + '44',
    borderColor: cate.color + 'dd'
  }

  const handleClick = () => {
    getQuestions(cate.name)
  }

  const handleMouseOver = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

  return (
    <button disabled={loading ? true : false} onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={hover ? stylesHover : styles} className="px-4 py-1 rounded-2xl border-2 cursor-pointer font-bold">
      {cate.name}
    </button>
  )
}