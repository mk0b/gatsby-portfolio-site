import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from './project';

const Projects = () => {
    //getting my projects json data with graphql!
    const projectData = useStaticQuery(graphql`
        query ProjectDataQuery {
            dataJson {
                projects {
                    id
                    project_name
                    technologies
                    live_link
                    github_link
                    image
                }
            }
        }
    `);
    const projectsArray = projectData.dataJson.projects;
    console.log('Projects Array', projectsArray);
    
    //use map to create a new array and pass through to project.
    const projects = projectsArray.map(project => {
        return (
            <Project 
                key={project.id} 
                name={project.project_name}
                technologies={project.technologies}
                live_link={project.live_link}
                github_link={project.github_link}
                image={project.image}
            />
        );
    });

    return (
        <div className="project-container">
            {projects}
        </div>
    );
};

export default Projects;