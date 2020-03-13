import React from "react";
import Intro from "./Intro/Intro";
import MainInfo from "./MainInfo/MainInfo";
import {connect} from "react-redux";


const SummaryInfo = (props) => {
    return (
        <div className='summary'>
            <Intro ru={props.ru} en={props.en} />
            <MainInfo darkMode={props.darkMode} langRU={props.langRU} ru={props.ru} en={props.en} technologies={props.technologies}
            languages={props.languages} experience={props.experience}/>
        </div>
    )
};

let stateToProps = (state) => ({
    age: state.mainInfo.age,
    phone: state.mainInfo.phone,
    technologies: state.mainInfo.technologies,
    languages: state.mainInfo.languages,
    experience: state.mainInfo.experience,
    ru: state.mainInfo.ru,
    en: state.mainInfo.en,
    langRU: state.config.langRU,
    darkMode: state.config.darkMode,
});

const SummaryInfoContainer = connect(stateToProps, null)(SummaryInfo);

export default SummaryInfoContainer;