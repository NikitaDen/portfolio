import React from "react";
import vk from './../../assets/images/vk.svg';
import fb from './../../assets/images/facebook.svg';
import gmail from './../../assets/images/gmail.svg';
import telegram from './../../assets/images/telegram.svg';


const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='portfolio__projects'>
                <div className='portfolio__projects__item palettor'>
                    <div>Palettor.</div>
                </div>
                <div className='portfolio__projects__item palettor'>
                    <div>Palettor.</div>
                </div>
            </div>
            <div className='contacts'>
                <div className='contacts__social'>
                    <h3>Social</h3>
                    <a href="https://vk.com/nkt_dnsv">
                        <img src={vk} alt='vk' className='contacts__social__item'/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100004291969423">
                        <img src={fb} alt='facebook' className='contacts__social__item'/>
                    </a>
                    <a href="mailto:nikita.denisov.1991@gmail.com">
                        <img src={gmail} title='nikita.denisov.1991@gmail.com' alt='gmail' className='contacts__social__item'/>
                    </a>
                    <a href="https://t.me/NktDenisov">
                        <img src={telegram} alt='gmail' className='contacts__social__item'/>
                    </a>
                </div>
                <div className='contacts__phone'>
                    <h3>Phone</h3>
                    <p>+375 (29) 317-05-55</p>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;