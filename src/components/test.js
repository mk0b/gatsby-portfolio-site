import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Test = () => {


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
                }
            }
        }
    `);
    const projectsArray = projectData.dataJson.projects;
    //console.log('Projects Array', projectsArray);
    

    return (
        <div>
            <p>Test</p>
        </div>
    );
}

export default Test;