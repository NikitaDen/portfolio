import React from 'react';
import './assets/styles/styles.scss';
import Portfolio from "./components/Portfolio/Portfolio";
import SummaryInfoContainer from "./components/SummaryInfo/SummaryInfo";
import {connect} from "react-redux";
import {toggleDarkMode} from "./redux/config-reducer";

const App = (props) => (
    <div className={props.darkMode ? 'resume resume--dark' : "resume"}>
        <SummaryInfoContainer/>
        <Portfolio/>
    </div>
);

let stateToProps = (state) => ({
    darkMode: state.config.darkMode,
});

export default connect(stateToProps, {toggleDarkMode})(App);
