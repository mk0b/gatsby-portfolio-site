//functional component
import React from 'react';
import { NavLink, HashRouter, Link } from 'react-router-dom';

//maybe implement this in the future when I have more projects will implement a better tagging stystem.

const Tags = (props) => (
            <HashRouter>
                <nav className="tags">
                    <ul>
                        <li><NavLink tag={Link} to="/javascript">JavaScript</NavLink></li>
                        <li><NavLink tag={Link} to="/reactjs">React.js</NavLink></li>
                        <li><NavLink tag={Link} to="/nodejs">Node.js</NavLink></li>
                        <li><NavLink tag={Link} to="/api">API</NavLink></li>
                    </ul>
                </nav>
            </HashRouter>
        );

export default Tags;