import React from 'react';

export function Topbar(props) {
    return (<nav className="topBar navbar navbar-dark bg-dark">
        <a href="www.google.com" className="navbar-brand">Logo</a>
        <ul className="nav">
            <li className = "nav-item"><a className="nav-link text-light">Menu Item 1</a></li>
            <li className = "nav-item"><a className="nav-link text-light">Menu Item 2</a></li>
            <li className = "nav-item"><a className="nav-link text-light">Menu Item 3</a></li>
        </ul>
    </nav>

    );
}