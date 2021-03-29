import React from 'react';
import { connect } from 'react-redux';
import InstrumentListItem from './InstrumentListItem'
import {getVisibleInstruments} from '../../selectors/instruments';

export const InstrumentList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Instruments</div>
                <div className="show-for-desktop">Instrument</div>
                <div className="show-for-desktop">Type</div>
            </div>
            <div className="list-body">
                {
                    props.instruments.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Instruments</span>
                        </div>
                    ) : (
                        props.instruments.map((instrument, index) => (
                        <InstrumentListItem
                            id={instrument.id}
                            make={instrument.make}
                            model={instrument.model}
                            nickname={instrument.nickname}
                            type = {instrument.type}
                            key={instrument.id}
                        />))
                    )
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        instruments: getVisibleInstruments(state.instruments, state.filters ),
    };
}

export default connect(mapStateToProps)(InstrumentList);