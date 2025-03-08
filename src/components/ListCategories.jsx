import { Category } from "./Category"

export const ListCategories = () => {
  const categories = [
    { "color": "#4F46E5", "name": "Technology" },
    { "color": "#F59E0B", "name": "History" },
    { "color": "#EF4444", "name": "Sports" },
    { "color": "#EC4899", "name": "Art" },
    { "color": "#8B5CF6", "name": "Music" },
    { "color": "#10B981", "name": "Science" },
    { "color": "#6B7280", "name": "Literature" },
    { "color": "#E11D48", "name": "Gaming" },
    { "color": "#A855F7", "name": "Food" }
  ]
  
  return (
    <div className="mt-5 flex justify-center gap-2 max-w-[350px] flex-wrap">
      {
        categories.map((cate, index) => (
          <Category key={index} cate={cate}></Category>
        ))
      }
    </div>
  )
}