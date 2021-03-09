import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

export const PracticeListItem = (props) => (
            <Link className="list-item" to={`/practices/edit/${props.id}`}>
                <div className="show-for-mobile">{moment(props.practiceDate).format('MMM Do, YYYY')} - <strong>{props.type}</strong></div>
                <div className="show-for-desktop">{moment(props.practiceDate).format('MMM Do, YYYY')}</div>
                <div className="show-for-desktop">{props.type}</div>
                <div className="show-for-desktop">{props.duration}</div>
            </Link>      
)

export default PracticeListItem;