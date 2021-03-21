import React from 'react';
import {connect} from 'react-redux';
import CostForm from './CostForm';
import {editCost, removeCost} from '../../actions/costs';

export class EditCostPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onSubmit(cost){
        this.props.onSubmit(this.props.cost.id, cost)
        this.props.history.push('/costs/')
    }

    removeItem(){
        this.props.removeItem(this.props.cost.id);
        this.props.history.push('/costs/')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Editing '{this.props.cost.description}'</h1>
                    </div>
                </div>
                <div className="content-container">
                    <CostForm
                        cost = {this.props.cost}
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
        onSubmit: (id, cost) => { 
            dispatch(editCost(id, cost))
        },
        removeItem: (id) => dispatch(removeCost(id))
    }
}

const mapStateToProps = (state, props) => {
    return {
        cost: state.costs.find((cost) => cost.id === props.match.params.id)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCostPage);