import React from 'react';

import Image from './image';

//use gatsby image to improve the images I'm using. 
//for each project in the projects array in projects.js this component will be called
//and will generate the indv project cards.

const Project = (props) => {

    return(
        <li>
            <h3 style={{ textAlign: 'center' }}>{props.name}</h3>
            <Image imageData={props.imageData} />
        </li>
    );
};

export default Project;