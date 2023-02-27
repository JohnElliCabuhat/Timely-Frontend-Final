import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/randommain">Random</Link>
                        </li>
                        <li>
                            <Link to="/hooks">Hooks</Link>
                        </li>
                        <li>
                            <Link to="/functionalcomp">Functional Component</Link>
                        </li>
                        <li>
                            <Link to="/lodash">Lodash</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;