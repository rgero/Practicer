import React from 'react';
import {connect} from 'react-redux';
import InstrumentForm from './InstrumentForm';
import { editInstrument, removeInstrument } from '../../actions/instruments';

export class EditInstrumentPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onSubmit(instrument){
        this.props.onSubmit(this.props.instrument.id, instrument);
        this.props.history.push('/instruments')
    }

    removeItem(){
        this.props.removeItem(this.props.instrument.id);
        this.props.history.push('/instruments')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Instrument</h1>
                    </div>
                </div>
                <div className="content-container">
                    <InstrumentForm
                        instrument= {this.props.instrument}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.removeItem}>Remove</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, instrument) => { 
            dispatch(editInstrument(id, instrument))
        },
        removeItem: (id) => dispatch(removeInstrument(id)),
    }
}

const mapStateToProps = (state, props) => {
    return {
        instrument: state.instruments.find((instrument) => instrument.id === props.match.params.id)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInstrumentPage); // Check out the react-redux documentation to understand the connect statement here.