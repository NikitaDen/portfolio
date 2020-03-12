import React from "react";
import js from '../../../assets/images/js.svg'
import react from '../../../assets/images/react.svg'
import redux from '../../../assets/images/redux.svg'
import html from '../../../assets/images/html.svg'
import css from '../../../assets/images/css.svg'
import sass from '../../../assets/images/sass.svg'


const MainInfo = () => {
    return (
        <div className='main-info'>
            <div className='main-info__item'>
                <h3>Objective</h3>
                <p>Purposeful and disciplined. Motivated for career growth and improving programming skills. Programming gives a great opportunity to make work-life interesting and valued, so I have enough motivation to become a good programmer.</p>
            </div>
            <div className='main-info__item'>
                <h3>Education</h3>
                <p>Master (BNTU, Standartization, metrology and information systems)</p>
            </div>
            <div className='main-info__item'>
                <h3>Technologies</h3>
                <div className='technologies'>
                    <img src={js} alt='JS' className='technology'/>
                    <img src={react} alt='React' className='technology'/>
                    <img src={redux} alt='Redux' className='technology'/>
                    <img src={html} alt='HTML' className='technology'/>
                    <img src={css} alt='CSS' className='technology'/>
                    <img src={sass} alt='Scss' className='technology'/>
                </div>
            </div>
            <div className='main-info__item'>
                <h3>Languages</h3>
                <p>English, B1-B2</p>
            </div>
            <div className='main-info__item'>
                <h3>Experience</h3>
                <p>null</p>
            </div>
        </div>
    )
};

export default MainInfo;