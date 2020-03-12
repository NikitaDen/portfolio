import React from 'react';
import './assets/styles/styles.scss';
import Portfolio from "./components/Portfolio/Portfolio";
import SummaryInfoContainer from "./components/SummaryInfo/SummaryInfo";

const App = () => (
    <div className="resume">
        <SummaryInfoContainer/>
        <Portfolio/>
    </div>
);

export default App;
