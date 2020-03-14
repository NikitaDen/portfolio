import React from "react";
import {connect} from "react-redux";


const Intro = (props) => {
    const toggleLang = (componentRu, componentEn) => {
        return props.langRU ? componentRu : componentEn;
    };

    return (
        <div className='intro'>
            <div className='intro__name'>
                {toggleLang(<>
                    <h1>{props.ru.fullName}</h1>
                    <p>Front-end developer</p>
                </>, <>
                    <h1>{props.en.fullName}</h1>
                    <p>Front-end developer</p>
                </>)}
            </div>
            <div className='intro__info'>
                <div>
                    {toggleLang(<>
                        <h4>Город:</h4>
                        <p>{props.ru.city}</p>
                    </>, <>
                        <h1>City:</h1>
                        <p>{props.en.city}</p>
                    </>)}
                </div>
                <div>
                    {toggleLang(<>
                        <h4>Возраст:</h4>
                    </>, <>
                        <h1>Age:</h1>
                    </>)}
                    <p>{props.age}</p>
                </div>
            </div>

            <div className={props.darkMode ? 'avatar avatar--dark' : 'avatar'} style={{backgroundImage: `url(${props.avatar})`}}></div>
        </div>
    )
};

let stateToProps = (state) => ({
    darkMode: state.config.darkMode,
    ru: state.mainInfo.ru,
    fullName: state.mainInfo.fullName,
    city: state.mainInfo.city,
    age: state.mainInfo.age,
    langRU: state.config.langRU,
    avatar: state.mainInfo.avatar,
});

export default connect(stateToProps, null)(Intro);