import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeItem from '../components/RecipeItem'
import WebLayout from '../layouts/WebLayout'

const Recipes = () => {

  const [recipes, setRecipes] = useState([])

    useEffect(() => {
    const allRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes")
        setRecipes(response.data.recipes)
      } catch (error) {
        console.log(error)
      }
    }
    allRecipes();
  }, [])

  return (
    <WebLayout>
        <div className='grid grid-cols-12 gap-4'>
        {
        recipes.map((recipe) => {
            return (
            <div className='col-span-4' key={recipe.id}>
                <RecipeItem recipe={recipe} />
            </div>
            )
        })
        }
        </div>
    </WebLayout>
  )
}

export default Recipes