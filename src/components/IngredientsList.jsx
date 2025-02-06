
import { nanoid } from 'nanoid'

export default function IngredientsList(props){

    return(
        <section className='main_section my-4'>
            <h2 className='my-3'>Ingredients on hand:</h2>
            <ul>
                {props.ingredients.map(ingredient => <li key={nanoid()}>{ingredient}</li>)}
            </ul>

            {
                props.ingredients.length > 3 &&
                <div className="get_recipe my-5 px-4 py-4 row align-items-center">
                    <div className='col-8' ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                        <button 
                            onClick={props.getRecipe} 
                            className='get-rescipe_btn btn btn-danger'
                            disabled={props.isLoading}
                        >
                            {props.isLoading ? (
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : 'Get a recipe'}
                        </button>

                    </div>
                </div>
            }
        </section>
    )
}