import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Project() {
    return(
        <div className="row">
          <div className="col-md-7">
            <Link href="https://mark4348.github.io/EventSafe/">
              <img className="img-fluid rounded mb-3 mb-md-0" src="css/project1ss.png" alt="Screen shot of and link to project" />
            </Link>
          </div>
          <div className="col-md-5">
            <h3>Event Safe</h3>
            <p>An app for the cautious event-goer to view covid statistics of the state along side event information.</p>
            <Link className="btn btn-dark" href="https://github.com/Mark4348/EventSafe">Visit the Repository!</Link>
          </div>
        </div>
    );
}

export default Project;