import '../styles/Banner.css'

import logo from '../assets/logo.png'

function Banner(){

    return (
    <div className="lmj-banner">
        
  		<h1 className='lmj-title'>
            LA MAISON JUNGLE
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
        </h1>
    </div>
    );
}

export default Banner;