import React from 'react';

import Image from './image';


//use gatsby image to improve the images I'm using. 
//for each project in the projects array in projects.js this component will be called
//and will generate the indv project cards.

const Project = (props) => {

    return(
        <div className="project-card">
            <Image image={props.image} id={props.name} />
            <h3>{props.name}</h3>
            <p>{props.technologies}</p>
        </div>
    );
};

export default Project;