import React from 'react';

import Image from './image';

//use gatsby image to improve the images I'm using. 
//for each project in the projects array in projects.js this component will be called
//and will generate the indv project cards.

//TODO: If live site string is empty only display source code.

const Project = (props) => {

    return(
        <li className="container">
            <h3 style={{ textAlign: 'center', color: `rgb(52,71,86)` }}>{props.name}</h3>
                <Image imageData={props.imageData} />
            <div className="overlay">
                <span><a href={props.github_link} target="blank">Source Code</a></span>
                <span><a href={props.live_link} target="blank">Live Site</a></span>
            </div>
        </li>
    );
};

export default Project;