import React from 'react'
import { Users, Globe } from "lucide-react";
const RecipeItem = ({recipe}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden hover:-translate-y-1 duration-200">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={`${recipe.image}?auto=format&fit=crop&w=800&q=60`}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            {recipe.name}
          </h2>
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
            {recipe.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={16} />
            <span>{recipe.cuisine}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 border border-gray-200 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeItem