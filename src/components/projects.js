import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Projects = () => {
    //getting my projects json data with graphql!
    const projectData = useStaticQuery(graphql`
        query ProjectDataQuery {
            dataJson {
                projects {
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

    //use a for each here to go through each and render out the gallery content

    return (
        <div className="project-container">
            <p>Projects will show here.</p>
        </div>
    );
};

export default Projects;