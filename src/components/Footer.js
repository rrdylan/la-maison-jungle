import { useState } from 'react';
import '../styles/Footer.css';

/** Composant de bas de page
 * 
 *  
 * @returns Footer
 */
function Footer() {
    

    return (
        <footer className='lmj-footer'>
            
            <div className='lmj-footer-elem'>

                Pour les passionné.e.s de plantes 🌿🌱🌵

            </div>
            
            <div className='lmj-footer-mail'>
                <form method="post"   action="">
                    <label> 
                        Laissez-nous votre mail : 
                    </label>

                    <CheckValue/>

                    <button 
                        type="button" 
                        className='lmj-footer-mail-button'  
                        disabled
                    >
                        Envoyer 
                    </button>
                </form>
            </div>

        </footer>
    )
}

function CheckValue(){

    const [inputValue, setInputValue] = useState('');
    const button = getElements("button", "lmj-footer-mail-button")[0];

    return (
        <div className='lmj-footer-mail-input'>
            <input 
                type="text"
                placeholder="adresse@mail.com"
                value={inputValue} 
                onChange= { (e) => setInputValue(e.target.value) } 
                onBlur= { 
                    (e) => {

                        button.disabled = true;

                        if(!e.target.value.trim())
                        {
                            e.target.value = "";
                            setInputValue("");
                        }
                        else if( !e.target.value.includes("@"))
                        {
                            alert(" Attention, il n'y pas d'@, ceci n'est pas une adresse valide");
                            
                        }
                        else
                        {
                            button.disabled = false;
                        }

                    }
                }
                
            >
            </input>

        </div>
    )

}
 
function getElements(tag, CN){

    var array = [];
    var elements = document.getElementsByTagName(tag);
    
    for (let i = 0; i < elements.length; i++)
    {
        if( elements[i].className === CN )
            array.push(elements[i]);
    }

    return array;
}


export default Footer