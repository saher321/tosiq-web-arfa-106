import React, { useEffect, useState } from "react";
import WebLayout from "../layouts/WebLayout";
import { Link, useParams } from "react-router";
import axios from "axios";
import { CircularProgress } from "react-loader-spinner";

import {
  ArrowLeft,
  Heart,
  Clock,
  Users,
  Flame,
  Star
} from "lucide-react";
const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();

  useEffect(() => {
    const recipeDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/recipes/${params.id}`,
        );
        setRecipe(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    recipeDetails();
  }, [params.id]);

  return (
    <WebLayout>
      {/* Recipe Details #{params.id} */}
      {isLoading ? (
        <div className="grid place-items-center">
          <CircularProgress
            height="50"
            width="50"
            color="#5478FF"
            ariaLabel="circular-progress-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
            strokeWidth={2}
            animationDuration={1}
          />
        </div>
      ) : (
        <div>
          {/* Image Section */}
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-72 object-cover rounded-3xl"
            />

            {/* Top Icons */}
            <Link to={'/recipes'} className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow">
              <ArrowLeft size={18} />
            </Link>

            <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
              <Heart size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="mt-6">
            {/* Title + Rating */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {recipe.name}
                </h1>
                <p className="text-gray-500 text-sm">{recipe.cuisine}</p>
              </div>

              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-medium">{recipe.rating}</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <Clock size={18} className="text-gray-500" />
                <div>
                  <p className="text-xs text-gray-400">Time</p>
                  <p className="text-sm font-medium">
                    {recipe.cookTimeMinutes} min
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <Users size={18} className="text-gray-500" />
                <div>
                  <p className="text-xs text-gray-400">Servings</p>
                  <p className="text-sm font-medium">{recipe.servings}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <Flame size={18} className="text-gray-500" />
                <div>
                  <p className="text-xs text-gray-400">Calories</p>
                  <p className="text-sm font-medium">
                    {recipe.caloriesPerServing}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  gap-3">
                {/* Ingredients */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm mt-8">
                <h2 className="font-semibold text-lg mb-4">Ingredients</h2>

                <ul className="space-y-3">
                    {recipe?.ingredients?.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3 text-gray-600"
                    >
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        {item}
                    </li>
                    ))}
                </ul>
                </div>

                {/* Instructions */}
                <div className="flex-2 bg-white rounded-2xl p-6 shadow-sm mt-6">
                <h2 className="font-semibold text-lg mb-4">Instructions</h2>

                <div className="space-y-5">
                    {recipe?.instructions?.map((step, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">
                        {index + 1}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                        {step}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </WebLayout>
  );
};

export default RecipeDetails;
