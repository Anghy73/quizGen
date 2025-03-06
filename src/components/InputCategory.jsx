import { search } from "../icons/search"

export const InputCategory = () => {
  console.log(search);
  
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-white mt-2">
      <p className="text-xl">Write the category you want.</p>
      <div className="w-full flex justify-center">
        <input className="bg-white text-black px-4 py-2 rounded-2xl rounded-br-none rounded-tr-none outline-0 w-full max-w-lg border-2 border-r-0 placeholder:text-neutral-400" type="text" placeholder="Example: Programing, Anime, Boxing" />
        <button className="bg-white text-black px-4 py-2 rounded-2xl rounded-bl-none rounded-tl-none cursor-pointer border-2">{search()}</button>
      </div>
      <p className="text-xl mb-4">Or select one of the ones we have pre-written for you.</p>
    </div>
  )
}