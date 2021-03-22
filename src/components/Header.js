import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="header">
        <div className="header__content">
            <Link className="header__title" to="/" exact="true"><h1>The Practicer</h1></Link>
            <div>
                <Link className="button" to="/dashboard/" exact="true">Dashboard</Link>
                <Link className="button--secondary" to="/costs/" exact="true">Costs</Link>
                <Link className="button" to="/practices/" exact="true">Practices</Link>  
                <Link className="button--secondary" to="/instruments/" exact="true">Instruments</Link>
            </div>
        </div>
    </header>
);

export default Header;