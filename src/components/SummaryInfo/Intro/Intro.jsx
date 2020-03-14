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
                    <h1><span className={props.darkMode ? 'let let--dark' : 'let'}>let </span> {props.ru.fullName + ' = {'}</h1>
                </>, <>
                    <h1><span className={props.darkMode ? 'let let--dark' : 'let'}>let </span>{props.en.fullName + ' = {'}</h1>
                </>)}
            </div>
            <div className='intro__info'>
                <div>
                    {toggleLang(<>
                        <h3>'Город': </h3>
                        <p>{props.ru.city},</p>
                    </>, <>
                        <h3>City: </h3>
                        <p>{props.en.city},</p>
                    </>)}
                </div>
                <div>
                    {toggleLang(<>
                        <h3>'Возраст': </h3>
                    </>, <>
                        <h3>Age: </h3>
                    </>)}
                    <p>{props.age},</p>
                </div>
            </div>

            <div className={props.darkMode ? 'avatar avatar--dark' : 'avatar'} style={{backgroundImage: `url(${props.avatar})`}}/>
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