import React from 'react';
import {connect} from 'react-redux';
import InstrumentForm from './InstrumentForm';
import { addInstrument } from '../../actions/instruments';

import {uid} from 'uid';

export class AddInstrumentPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(instrument){

        // Add a temporary ID
        instrument.id = uid(22);

        this.props.onSubmit(instrument);
        this.props.history.push('/instruments')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Instrument</h1>
                    </div>
                </div>
                <div className="content-container">
                    <InstrumentForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (instrument) => dispatch(addInstrument(instrument))
    }
}


export default connect(undefined, mapDispatchToProps)(AddInstrumentPage); // Check out the react-redux documentation to understand the connect statement here.