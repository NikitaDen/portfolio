import React from "react";
import avatar from '../../../assets/images/avatar-2.JPG';


const Intro = (props) => {
    return (
        <div className='intro'>
            <div className='intro__name'>
                <h1>Nikita Denisov</h1>
                <p>Front-end developer</p>
            </div>
            <div className='intro__info'>
                <div>
                    <h4>City:</h4>
                    <p>Minsk</p>
                </div>
                <div>
                    <h4>Age:</h4>
                    <p>23</p>
                </div>
            </div>
            <img className='avatar' src={avatar} alt="Avatar"/>
        </div>
    )
};

export default Intro;