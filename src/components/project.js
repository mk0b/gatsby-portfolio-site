import React, { Fragment } from 'react';

//import Image from './Image';

//for each project in the projects array in projects.js this component will be called
//and will generate the indv project cards.

const Project = (props) => {

    console.log('Image Data: ', props.imageData);
    console.log('src', props.imageData.src.childImageSharp.fixed.src);

    return(
        <li className="container">
            <h3 style={{ textAlign: 'center', color: `rgb(52,71,86)` }}>{props.name}</h3>
            <img src={props.imageData.src.childImageSharp.fixed.src} alt={props.imageData.name} />
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