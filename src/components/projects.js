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
    console.log('Project Data: ', projectData);

    return (
        <div>
            <p>Projects will show here.</p>
        </div>
    );
};

export default Projects;