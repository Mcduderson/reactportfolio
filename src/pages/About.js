import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/picMe.jpg";
//import { Document } from 'react-pdf'
import resume from "../images/Elliott-Payne(2).pdf";

function About() {
    return (
        <main className="container my-5 ml-3 py-2">
            <section className="row">
                <article className="col-10">
                    <h1>About Me</h1>
                    <hr/>
                </article>
            </section>
            <section className="row">
                <article className="col-10">
                    <img className="img-fluid float-left mr-3" src={profilePic} alt="Elliott Payne" />
                    <p>
                    Hi! My name is Elliott Payne, I am a Full Stack Web Developer from Austin, TX with extensive knowledge in HTML, CSS, JS, JQuery, Node.js, Express, SQL, MongoDb, ReactJs, Github, and Bootstrap. I live in Austin with my girlfriend, my dog Eleanor, and our budgie pudgy. I grew up overseas on military bases, mostly in Europe, where my parents worked as elementary school teachers. I attended Texas State University and graduated with a Bachelor’s degree in Recreation Administration. For almost a decade I worked and managed for Omni Hotels & Resorts untill I was able to persue my passion in Coding and Web Development.
                    </p>
                    <br />
                    <p>
                    My hobbies include coding, hiking, traveling, reading, TV/Movies, video games, and many more activities.
                    </p>
                    <br />
                    <p>
                    To contact me please use my LinkedIn profile or email me at e.payne000@gmail.com.
                    </p>
                    <hr />
                    <Link className="text-light" to={resume} target="_blank">Link to PDF Resume</Link>
                    <hr />
                    <Link className="text-light" to={{ pathname: "https://github.com/Mcduderson"}} target="_blank">Link to Github profile</Link>
                    <br />
                    <Link className="text-light" to={{ pathname: "https://www.linkedin.com/in/elliott-payne-8852661ab/"}} target="_blank">Link to LinkedIn profile</Link>              
                </article>
            </section>
        </main>
    );
}

export default About;