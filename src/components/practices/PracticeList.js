import React from 'react';
import { connect } from 'react-redux';
import PracticeListItem from './PracticeListItem'
import {getVisiblePractices} from '../../selectors/practices';

export const PracticeList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Practices</div>
                <div className="show-for-desktop">Date</div>
                <div className="show-for-desktop">Type</div>
                <div className="show-for-desktop">Duration</div>
            </div>
            <div>
                {
                    props.practices.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Practices</span>
                        </div>
                    ) : (
                        props.practices.map((practice, index) => (
                        <PracticeListItem
                            id={practice.id}
                            practiceDate={practice.practiceDate}
                            duration={practice.duration}
                            type={practice.type}
                            key={practice.id}
                        />))
                    )
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        practices: getVisiblePractices(state.practices, state.filters ),
    };
}

export default connect(mapStateToProps)(PracticeList);