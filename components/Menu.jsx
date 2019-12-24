import Recipe from './Recipe.jsx'

const Menu = ({recipes}) => (
    <article>
        <header>
            <h1>
                Recipes
            </h1>
        </header>
        <div className="recipes">
            {
                recipes.map((item, i) => (
                    <Recipe key={i} {...item} />
                ))
            }
        </div>
    </article>
)

export default Menu