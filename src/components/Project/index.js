import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Project(props) {
    return(
        <div className="row styling">
          <div className="col-md-7">
            <Link to={{ pathname: props.linkA}} target="_blank">
              <img className="img-fluid rounded mb-3 mb-md-0" src={props.img} alt="Screen shot of and link to project" />
            </Link>
          </div>
          <div className="col-md-5">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link className="btn btn-dark" to={{ pathname: props.linkB}} target="_blank">Visit the Repository!</Link>
          </div>
        </div>
    );
}

export default Project;