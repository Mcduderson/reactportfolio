import React from "react";
import Project from "../components/Project";
import picA from "../images/project1ss.png";
import picB from "../images/KASss.png";
import picC from "../images/hw6ss.png";
import picD from "../images/ssdayplan.png";
import picE from "../images/sscodequiz.png";
import picF from "../images/hw3ss.png";

function Portfolio() {
    return (
        <div class="container my-5">
            <h1 class="my-4">Elliott's
            <small>Portfolio</small>
            </h1>
            <Project img={picA} linkA="https://mark4348.github.io/EventSafe/" linkB="https://github.com/Mark4348/EventSafe" title ="Event Safe" description="An app for the cautious event-goer to view covid statistics of the state along side event information."/>
            <Project img={picB} linkA="https://enigmatic-brushlands-64346.herokuapp.com/" linkB="https://github.com/Mcduderson/KeepAustinSocial" title ="Keep Austin Social" description="An app for locals to find reliable information on happy hours, post and interact with other users, and search for businesses by name or zipcode."/>
            <Project img={picC} linkA="https://mcduderson.github.io/HW6-WeatherDashboard/" linkB="https://github.com/Mcduderson/HW6-WeatherDashboard" title ="Weather Dashboard" description="A weather dashboard which displays current weather and forecast for a searched city. Users can search for a city, and if found the app will return the current weather, as well as a forecast of the next 5 days. The user's search history is saved as a button for them to quickly check the weather of that city again."/>
            <Project img={picD} linkA="https://mcduderson.github.io/HW5-DayScheduler/" linkB="https://github.com/Mcduderson/HW5-DayScheduler" title ="Work Day Scheduler" description="A day planner application that allows users to enter their tasks and schedule from 9am to 5pm. The app runs on the users browser and features color changes depending on the current time."/>
            <Project img={picE} linkA="https://mcduderson.github.io/HW4-CodeQuiz/" linkB="https://github.com/Mcduderson/HW4-CodeQuiz" title ="Timed Code Quiz" description="An application to administer a timed coding quiz to help strengthen knowledge and confidence. This timed quiz app was made with HTML, CSS, and JavaScript. All scores are stored in local storage."/>
            <Project img={picF} linkA="https://mcduderson.github.io/HW3-PasswordGen/" linkB="https://github.com/Mcduderson/HW3-PasswordGen" title ="Random Password Generator" description="This program is a simple desktop application designed to help people easily generate, copy, and save random strings that can be used as passwords."/>
        </div>
    );
}

export default Portfolio;