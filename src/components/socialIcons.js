import React from 'react';

import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github_icon_2.svg';
import Treehouse from '../images/treehouse_icon.png';

//im using these in two places so making a component for them.
const SocailIcons = props => (
    <div className="footer-icons-social">
        <span><a href="https://teamtreehouse.com/megankatherineobrien" target="blank"><img className="footer-icons" src={Treehouse}></img></a></span>
        <span><a href="https://github.com/mk0b" target="blank"><img className="footer-icons" src={GitHub}></img></a></span>
        <span><a href="https://www.linkedin.com/in/megankob/" target="blank"><img className="footer-icons" src={LinkedIn}></img></a></span>
    </div>
);

export default SocailIcons;