import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages. 
 * */

const Image = (props) => {
  //setting up variables to pass into the static query to get the current image
  const variables = {
    image: props.image
  }

  //$image: String! $image
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "project4.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.image.childImageSharp.fixed} alt={props.name} />
}

export default Image;
