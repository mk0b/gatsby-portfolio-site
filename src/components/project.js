import React, { Fragment } from 'react';

import Image from './Image';

//for each project in the projects array in projects.js this component will be called
//and will generate the indv project cards.

const Project = (props) => {
    
    //for now I removed sqlite from the tech lists to make things fit better
    //TODO: Find a better solution. I'm thinking of putting every tech into it's own span and being able to style them separately to create a better visual.
    const technologies = props.technologies.join('  ');

    return(
        <li className="container">
            <h3 style={{ textAlign: 'center', color: `rgb(52,71,86)` }}>{props.name}</h3>
            <Image imageData={props.imageData} />
            <div className="technologies">
                <h4>{technologies}</h4>
            </div>
            <div className="overlay">
                {/*checking live link and if it's an empty string only display github link*/}
                {props.live_link ? (
                    <Fragment>
                        <span><a href={props.github_link} target="blank">Source Code</a></span>
                        <span><a href={props.live_link} target="blank">Live Site</a></span>
                    </Fragment>
                ) : (
                    <Fragment>
                        <span><a href={props.github_link} target="blank">Source Code</a></span>
                    </Fragment>
                )}
            </div>
        </li>
    );
};

export default Project;