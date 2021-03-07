import React from 'react';
import { Link } from 'react-router-dom';
import InstrumentList from './InstrumentList'
import InstrumentListFilters from './InstrumentListFilters';

const InstrumentPage = () => (
    <div>
        <div className="content-navBar">
            <div>
                <Link className="button" to="/instruments/create">Add Instrument</Link>
            </div>
            <InstrumentListFilters/>
        </div>
        <InstrumentList/>
    </div>
);

export default InstrumentPage;
