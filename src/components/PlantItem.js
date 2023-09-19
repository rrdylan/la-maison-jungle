import CareScale from './CareScale';

import '../styles/PlantItem.css'

/**
*   Props :
*    .name : nom de la plante
*    .category : Categorie de la plante
*    .cover : image correspondante
*    .id : id de l'item
*    .light : niveau de besoin en lumière
*    .water : niveau de besoin en eau
*   Item de la plante, affiche une image de la plante lié avec ses besoins
* @return Plantitem
*/
function PlantItem( props ){
    
    return (
            <div key={props.id} className={`lmj-plant-item lmj-plant-item-${props.category}`}>
                
                <span className='lmj-plant-item-price'>{ props.price } €</span>
                <img className='lmj-plant-item-cover' src={props.cover} alt={`${props.name} cover`} /> 
                {props.name}
                
                <div>
                    <CareScale careType='water' scaleValue={props.water} />
                    <CareScale careType='light' scaleValue={props.light} />
                </div>    

                {props.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
            </div>
            
    )
}

export default PlantItem