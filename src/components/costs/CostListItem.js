import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const CostListItem = (props) => (
        <Link className="list-item" to={`/costs/edit/${props.id}`}>
                <div className="show-for-mobile">{moment(props.createdAt).format('MMM Do, YYYY')} - <strong>{numeral((props.amount/100)).format('$0,0.00')}</strong></div>
                <div className="show-for-desktop">{moment(props.createdAt).format('MMM Do, YYYY')}</div>
                <div className="show-for-desktop">{props.description}</div>
                <div className="show-for-desktop">{numeral((props.amount/100)).format('$0,0.00')}</div>
        </Link>      
)

export default CostListItem;