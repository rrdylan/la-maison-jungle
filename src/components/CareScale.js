import sunlogo from '../assets/sun.svg';
import waterlogo from '../assets/water.svg';

/**
 * 
 * ScaleValue: Niveau de careType
 * CareType: Besoin de la plante
 * 
 * @returns CareScale
 */
function CareScale( {scaleValue, careType} ){
    
    const range = [1,2,3];
    const scaleType = careType === 'light' ? <img src={sunlogo} alt={`sun`} /> : <img src={waterlogo} alt={`water`} /> ; 


    return (
        <div onClick = { () => handleClick( scaleValue, careType)}> 
            {
                range.map( (rangeElem) =>
                    scaleValue >= rangeElem ? 
                        <span key={rangeElem.toString()}> {scaleType} </span> : null
                )
            }
        </div>
        )
}

function handleClick(scaleValue, careType){
    
    const scale = ["peu", "modérement", "beaucoup"];
    const type = careType === 'light' ? "de lumière" : "d'arrosage";
    const message = "Cette plant requiert " + scale[scaleValue - 1] + " " + type +"." ;
    
    alert(message);
}

export default CareScale