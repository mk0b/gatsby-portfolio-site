import React from 'react';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages. 
 * */

 //FIXME: I cannot get Img to work. Works perfectly on my machine but when I deploy it the images wont render properly. 
//There are others having these issues but I found no solution after two days. Will come back to it later and use regular image now.

const Image = (props) => (<Img fixed={props.imageData.src.childImageSharp.fixed} alt={props.imageData.name} />);


export default Image;