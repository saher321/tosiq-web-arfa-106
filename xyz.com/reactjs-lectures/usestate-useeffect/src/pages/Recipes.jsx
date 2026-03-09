import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeItem from '../components/RecipeItem'
import WebLayout from '../layouts/WebLayout'
import { CircularProgress } from 'react-loader-spinner'
import { Link } from 'react-router'

const Recipes = () => {

  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      const allRecipes = async () => {
        try {
          setIsLoading(true)
          const response = await axios.get("https://dummyjson.com/recipes")
          setRecipes(response.data.recipes)
          setIsLoading(false)
        } catch (error) {
          console.log(error)
          setIsLoading(false)
        }
      }
      allRecipes();
    }, [])

  return (
    <WebLayout>
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
          <div className='grid grid-cols-12 gap-4'>
            {
            recipes.map((recipe) => {
              return (
              <div className='col-span-4' key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>
                  <RecipeItem recipe={recipe} />
                </Link>
              </div>
              )
              })
            }
          </div> 
        }
    </WebLayout>
  )
}

export default Recipes