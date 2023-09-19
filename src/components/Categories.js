import plantList from '../datas/plantList'
/**
* Gère les catégories de plantes affiché dans le shop.
* Params: Props activeCategory, setActiveCategory
* Retourne une balise <select> avec l'option par défaut "Toutes", afin d'affiché toutes les plantes.
* Génère les <option> pour chaque catégorie à partir des données de PlantList.js
*/
function Categories ( {activeCategory, setActiveCategory} ){

    const reducer = (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category) ;
    const categories = plantList.reduce(reducer, []);

    function handleChange(event){
        setActiveCategory({value: event.target.value});
    }

    return (
        <div className='lmj-categories'>
            <select className='lmj-categories-select' value={activeCategory.value} onChange={handleChange}>
                <option className='lmj-categories-select-item' value=''> Toutes </option>
            {
                categories.map((cat) => (
                    <option 
                        key = {cat} 
                        className = 'lmj-categories-select-item'
                        value = {cat}
                    >
                        {cat}
                    </option>
                ))
            }
            </select>
        </div>


    );
}

export default Categories;