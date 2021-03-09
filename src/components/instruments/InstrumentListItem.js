import React from 'react';
import {Link} from 'react-router-dom';

export const InstrumentListItem = (props) => (
        <Link className="list-item" to={`/instruments/edit/${props.id}`}>
            <h3 className="list-item__title">{props.make} {props.model}</h3>
            <h3 className="list-item__type">{props.type}</h3>
        </Link>       
)

export default InstrumentListItem;