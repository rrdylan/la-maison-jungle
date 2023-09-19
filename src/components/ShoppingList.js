import { useState }  from 'react'
import plantList from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';

import '../styles/ShoppingList.css';

/**
 *  Liste dynamique qui extrait les catégories uniques de plantes
 *  Affiche la liste des catégories de plantes au-dessus de la liste des plantes à vendre
 * @returns ShoppingList
 */
function ShoppingList( { cart, updateCart } ){

    const [activeCategory, setActiveCategory] = useState({value:''});

    function addToCart(name, price) {
        const currentPlantSaved = cart.find( (plant) => plant.name === name)

        if(currentPlantSaved) {
            const cartFilterCurrentPlant = cart.filter( 
                (plant) => plant.name !== name
                )
            updateCart([
                ...cartFilterCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        }
        else {
            updateCart([
                ...cart,
                { name, price, amount: 1 }
            ])
        }
    }

    return (

        <div className='lmj-shopping-list'>
            
            <Categories 
                activeCategory = {activeCategory} 
                setActiveCategory = {setActiveCategory}/>

            <ul className='lmj-plant-list'>
                {
                    plantList.map( (plant) => (
                        !activeCategory.value || activeCategory.value === plant.category  ? (
                            <div className="lmj-plant-list-item" key={plant.id}>
                                <li>
                                    <PlantItem 
                                        key={plant.id} 
                                        {...plant}/>
                                    <button 
                                        className="lmj-plant-list-add" 
                                        onClick = { () => addToCart(plant.name, plant.price) }
                                        disabled = { plant.price ? false : true}
                                        >
                                        Ajouter
                                    </button>
                                </li>
                            </div>
                        )
                        : null
                        )
                    )
                }
            </ul>
        </div>
    
    )
}
export default ShoppingList


