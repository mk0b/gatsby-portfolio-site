//functional component
import React from 'react';
import { NavLink, HashRouter, Link } from 'react-router-dom';

const Tags = (props) => (
            <HashRouter>
                <nav className="tags">
                    <ul>
                        <li><NavLink tag={Link} to="/reactjs">React.js</NavLink></li>
                        <li><NavLink tag={Link} to="/nodejs">Node.js</NavLink></li>
                        <li><NavLink tag={Link} to="/api">API</NavLink></li>
                    </ul>
                </nav>
            </HashRouter>
        );

export default Tags;