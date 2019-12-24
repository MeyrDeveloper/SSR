import React from 'react'
import Ingredient from './Ingredient.jsx'

const IngredientsList = ({list}) => (
    <ul className="ingredients">
        {
            list.map((item, i) =>(
                <Ingredient key={i} {...item} />
            ))
        }
    </ul>
)

export default IngredientsList