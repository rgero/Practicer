import React from 'react';
import {connect} from 'react-redux';
import CostForm from './CostForm';
import { addCost } from '../../actions/costs';

import {uid} from 'uid';

export class AddCostPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(cost){

        // Add a temporary ID
        cost.id = uid(22);

        this.props.onSubmit(cost);
        this.props.history.push('/costs/')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Cost</h1>
                    </div>
                </div>
                <div className="content-container">
                    <CostForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (cost) => dispatch(addCost(cost))
    }
}

export default connect(undefined, mapDispatchToProps)(AddCostPage); // Check out the react-redux documentation to understand the connect statement here.