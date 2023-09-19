import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart( {cart, updateCart}){

    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    );


    useEffect(
        () => {
            document.title = `LMJ: ${total}€ d'achats`
	}, [total]);


    return isOpen ? 
    ( 
        <div className='lmj-cart'>
            
            <button 
                className='lmj-cart-toggle-button'
                onClick={ () => setIsOpen(false) } 
            > 
                Fermer 
            </button>

            { cart.length > 0 ? (
                <div>
                    <h2> Panier </h2>

                    <ul
                        className='lmj-cart-list'
                    >
                        {
                            cart.map( (product, index) => 
                                <li className='lmj-cart-list-item' key={ `${product.name}-${index}` }>
                                    {product.name}   {product.price}€ x{product.amount}
                                </li>
                            )
                        }
                    </ul>

                    <h3><p> Total : { total } €</p></h3>

                    <button
                        className = 'lmj-cart-reset-button'
                        onClick = { () => updateCart([]) } 
                    > 
                        Vider le panier
                    </button> 
                </div>
            ) : (
                <div> Votre panier est vide </div>
            )}
        </div>
    ) : 
    (
        <div className='lmj-cart-closed'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
                
            > 
            Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart;