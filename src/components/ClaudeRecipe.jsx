
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return(
        <section className='suggested_recipe_container text-wrap' aria-live='polite'>
            <h2 className='mb-4 fw-bold'>Chef Claude recommends</h2>
            <ReactMarkdown className="text-wrap ReactMardown overflow-wrap-anywhere" >
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}