import React from 'react';
import { Link } from 'react-router-dom';
import CostList from './CostList'
import CostListFilters from './CostListFilters';

const CostPage = () => (
    <div>
        <div className="content-navBar">
            <Link className="button" to="/costs/create">Add Cost</Link>
        </div>
        <CostListFilters/>
        <CostList/>
    </div>
);

export default CostPage;
