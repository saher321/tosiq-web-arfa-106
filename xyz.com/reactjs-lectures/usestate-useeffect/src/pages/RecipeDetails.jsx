import React, { useEffect, useState } from "react";
import WebLayout from "../layouts/WebLayout";
import { useParams } from "react-router";
import axios from "axios";
import { CircularProgress } from "react-loader-spinner";

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
      Recipe Details #{params.id}

      {
        isLoading ? 
        <div className='grid place-items-center'>
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
          </div> :
        <div className=" bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Image */}
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-72 object-cover"
          />

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">
                  {recipe.name}
                </h1>

                <p className="text-gray-500 mt-1 text-sm">
                  {recipe.cuisine} Cuisine • {recipe.difficulty}
                </p>
              </div>

              <div className="text-right">
                <p className="text-yellow-500 font-semibold text-lg">
                  ★ {recipe.rating}
                </p>
                <p className="text-gray-400 text-sm">
                  {recipe.reviewCount} reviews
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-3 gap-6 text-center border-y py-6 mb-8">
              <div>
                <p className="text-sm text-gray-400">Prep Time</p>
                <p className="font-medium text-gray-800">
                  {recipe.prepTimeMinutes} min
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Cook Time</p>
                <p className="font-medium text-gray-800">
                  {recipe.cookTimeMinutes} min
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Servings</p>
                <p className="font-medium text-gray-800">{recipe.servings}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Ingredients */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Ingredients
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {recipe?.ingredients?.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Instructions
                </h2>

                <ol className="space-y-3 text-gray-600 text-sm list-decimal list-inside">
                  {recipe?.instructions?.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {recipe?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      }
    </WebLayout>
  );
};

export default RecipeDetails;
