import React from "react";
import Intro from "./Intro/Intro";
import MainInfo from "./MainInfo/MainInfo";
import {connect} from "react-redux";


const SummaryInfo = () => {
    return (
        <div className='summary'>
            <Intro/>
            <MainInfo/>
        </div>
    )
};

let stateToProps = (state) => {
    return {

    }
};

const SummaryInfoContainer = connect(stateToProps, null)(SummaryInfo);

export default SummaryInfoContainer;