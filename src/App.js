import React from 'react';
import './App.css';
import Alarm from './Alarm.js';
import NumberTrivia from "./NumberTrivia";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
    return (
    <div className="App">
        <nav className="navbar-home">
            <h3>Arduino Student Alarm</h3>
        </nav>

        <div className="container-welcome">
            <h1 id="welcome-title" className="display-4">Welcome to the Arduino Student Alarm</h1>
            <p class="lead">Below you can set your alarm on or off and see a number trivia and the weather in Amsterdam</p>
        </div>


        <div className="container-rows">
            <h6 id="information" className="display-4">Number Trivia & Weather Information</h6>
            <div className="row">
                <div className="col">
                    <NumberTrivia/>
                </div>
                <div className="col">
                    <Weather/>
                </div>
            </div>
        </div>

        <div className="container-alarm">
            <Alarm/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
