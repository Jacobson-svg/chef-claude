import React from 'react'
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../ai'


export default function Main(){

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    function addIngredients(formData){

        const newIngredient = formData.get('ingredient')

        newIngredient.trim() ?
        setIngredients(
            prevIngredients => [...prevIngredients, newIngredient]
        ) : null

    }


    const recipeSection = React.useRef(null)

    React.useEffect(function (){
        if(recipe !== "" && recipeSection !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe(){
        setIsLoading(true)  // Activer le loader
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            setRecipe(recipeMarkdown)
        } finally {
            setIsLoading(false)  // Désactiver le loader
        }
    }
    
    return (
        <main className='my-5 px-4 px-md-5'>
            <form action={addIngredients} >
                <div className='row justify-content-center'>
                    <input className="input_text col-sm-8 col-6" type="text" name="ingredient" aria-label="Add ingredient" placeholder="e.g oregano" />
                    <button className="input_submit text-nowrap col-sm-4 col-6" type="submit">+ Add Ingredient</button>
                </div>
            </form>

            {
                ingredients.length > 0 &&
                
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    isLoading={isLoading}
                />
            }

            {
                recipe &&
                <ClaudeRecipe recipe={recipe} />
            }

            
        </main>
    )
}