import React from 'react';
import { Link } from 'react-router-dom';
import PracticeList from './PracticeList';
import PracticeListFilters from './PracticeListFilters';

const PracticePage = () => (
    <div>
        <div className="content-navBar">
            <Link className="button" to="/practices/create">Add Practice</Link>
            <Link className="button" to="/instruments">View Instruments</Link>
        </div>
        <PracticeListFilters/>
        <PracticeList/>
    </div>
);

export default PracticePage;
