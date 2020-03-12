import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Test = () => {
    //graphql call from allDataJSOn trying to get the sharp info on images.
        const projectDataAllJSON = useStaticQuery(graphql`
        query ProjectData {
            allDataJson {
                edges {
                    node {
                        projects {
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

    console.log('Project Data All Json Image Sharp: ', projectDataAllJSON);

    return (
        <div>
            <p>Test</p>
        </div>
    );
}

export default Test;