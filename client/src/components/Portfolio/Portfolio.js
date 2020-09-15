import React from "react";
import "./style.css";
import { a } from "react-router-dom";

const imageStyle = {
    maxWidth: "100%",
    maxHeight: "20vw",
    minHeight: "20vw"
}
function Portfolio() {
    // Setting the component's initial state

    return (

        <div className="row mb-2 mt-5">
            <div className="col-md-3 text-center">
                <h3 className="header">CSS Refactor</h3>
                <p><a href="https://coreyspratlan.github.io/hw1/" target="blank"><img className="img-fluid" src="./images/Refactor.png" alt="Refactor Page" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/hw1" target="blank">GitHub: SEO Refactor</a></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">APIs</h3>
                <p><a href="https://coreyspratlan.github.io/weather_dashboard/" target="blank"><img className="img-fluid" src="./images/weatherDashboard.png" alt="weather dashboard" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/weather_dashboard" target="blank">GitHub: Weather Dashboard</a></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">MySQL</h3>
                <p><a href="https://drive.google.com/file/d/1fEN0wc7AbYlcnaX-yh6dxEgKt5jv692t/view?usp=sharing" target="blank"><img className="img-fluid" src="./images/Employee Tracker.png" alt="employee tracker app" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/employee_tracker" target="blank">GitHub: Employee Tracker</a></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Project 1</h3>
                <p><a href="https://coreyspratlan.github.io/Project1" target="blank"><img className="img-fluid" src="./images/Top Shelf App.png" alt="top shelf app" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/Project1" target="blank">GitHub: Top Shelf App</a></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">PWA</h3>
                <p><a href="https://warm-woodland-21936.herokuapp.com/" target="blank"><img className="img-fluid" src="./images/pwaBudget.png" alt="pwa budget app" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/budget" target="blank">GitHub: PWA Budget App</a></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">React</h3>
                <p><a href="https://coreyspratlan.github.io/reactEmployeeDirectory/" target="blank"><img className="img-fluid" src="./images/reactEmployeeDirectory.png" alt="react employee directory" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/reactEmployeeDirectory" target="blank">GitHub: React Employee Directory App</a></p>
            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Project 2</h3>
                <p><a href="https://find-my-fare.herokuapp.com/" target="blank"><img className="img-fluid" src="./images/findmyfare.png" alt="find my fare app" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/Project-2-Idea" target="blank">GitHub: Find My Fare App</a></p>

            </div>
            <div className="col-md-3 text-center">
                <h3 className="header">Project 3</h3>
                <p><a href="https://pocketdiy.herokuapp.com/" target="blank"><img className="img-fluid" src="./images/PocketDIY.png" alt="pocket diy" style={imageStyle} /></a></p>
                <p><a href="https://github.com/coreyspratlan/PocketDIY" target="blank">GitHub: PocketDIY</a></p>
            </div>


        </div>



    );
}


export default Portfolio;