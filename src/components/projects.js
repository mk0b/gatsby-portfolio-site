import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from './project';

const Projects = () => {
    //graphql call from allDataJSOn trying to get the sharp info on images.
    //did it this way based off this amazing thread that took me two days to find: https://github.com/gatsbyjs/gatsby/issues/8312 
    const projectData = useStaticQuery(graphql`
    query ProjectData {
            allDataJson {
                edges {
                    node {
                        projects {
                            id
                            project_name
                            technologies
                            live_link
                            github_link
                            image {
                                name
                                src {
                                    childImageSharp {
                                        fixed {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    //console.log('Project Data All Json Image Sharp: ', projectData);

    const projectsArray = projectData.allDataJson.edges[0].node.projects;
    //console.log('New projects array', projectsArray);
    
    //use map to create a new array and pass through data to idv project.
    const projects = projectsArray.map(project => {
        console.log(project.image);
        return (
            <Project 
                key={project.id} 
                name={project.project_name}
                technologies={project.technologies}
                live_link={project.live_link}
                github_link={project.github_link}
                imageData={project.image}
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