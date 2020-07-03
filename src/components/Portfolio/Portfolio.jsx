import React from "react";
import lang from './../../assets/images/language.svg';
import {connect} from "react-redux";
import {setLanguage, toggleDarkMode} from "../../redux/config-reducer";
import moon from './../../assets/images/moon.svg';
import sun from './../../assets/images/sun.svg';


const Portfolio = (props) => {

    const toggleDarkMode = (darkMode) => {
        props.toggleDarkMode(darkMode);
    };

    const setLanguage = (lang) => {
        props.setLanguage(lang);
    };

    const toggleLang = (componentRu, componentEn) => {
        return props.langRU ? componentRu : componentEn;
    };

    return (
        <div className={props.darkMode ? 'portfolio portfolio--dark' : "portfolio"}>
            <div className={props.darkMode ? 'contacts contacts--dark' : "contacts"}>
                <div className='contacts__social'>
                    {toggleLang(<h3>Соцсети</h3>, <h3>Social</h3>)}
                    {props.social.map(item => {
                        return (
                            <a key={item.id} href={item.url}>
                                <img src={item.photo} alt={item.alt}
                                     className={props.darkMode ? 'contacts__social__item contacts__social__item--dark' : "contacts__social__item"}/>
                            </a>
                        )
                    })}
                </div>
                <div className='contacts__phone'>
                    {toggleLang(<h3>Телефон</h3>, <h3>Phone</h3>)}
                    <p>{props.phone}</p>
                </div>
                <div className='settings'>
                    <img onClick={() => setLanguage(props.langRU)}
                         className={props.darkMode ? 'lang lang--dark' : "lang"} src={lang} alt="Language"/>
                    <input onChange={() => toggleDarkMode(props.darkMode)} id='dark-check' type="checkbox"/>
                    <label className='dark-mode' htmlFor="dark-check">
                        <div className='toggle'
                             style={props.darkMode ? {backgroundImage: `url(${sun})`} : {backgroundImage: `url(${moon})`}}/>
                    </label>
                </div>
            </div>

            {toggleLang(<h3 style={{marginBottom: '1rem'}}>Проекты</h3>, <h3 style={{marginBottom: '1rem'}}>Projects</h3>)}

            <div className='portfolio__projects'>
                {props.portfolio.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <a target="_blank" href={item.href} style={item.img ? {backgroundImage: `url('${item.img}')`} : {}} className={item.className}>
                                <div>{item.title}</div>
                            </a>
                            <div className={'description'}>
                                <p>{item.description}</p>
                                <p className={'description__stack'}>Stack: {item.stack}</p>
                                {item.github ? <p>GitHub: <a href={item.github}>{item.github}</a></p> : null}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
};

let stateToProps = (state) => ({
    darkMode: state.config.darkMode,
    langRU: state.config.langRU,
    phone: state.mainInfo.phone,
    social: state.mainInfo.social,
    ru: state.mainInfo.ru,
    portfolio: state.mainInfo.portfolio,
});

export default connect(stateToProps, {toggleDarkMode, setLanguage})(Portfolio);
