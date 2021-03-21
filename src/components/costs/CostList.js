import React from 'react';
import { connect } from 'react-redux';
import CostListItem from './CostListItem'
import {getVisibleCosts} from '../../selectors/costs';

export const CostList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Costs</div>
                <div className="show-for-desktop">Date</div>
                <div className="show-for-desktop">Description</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {
                    props.costs.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Costs</span>
                        </div>
                    ) : (
                        props.costs.map((cost, index) => (
                        <CostListItem 
                            id={cost.id}
                            description={cost.description}
                            amount={cost.amount}
                            createdAt={cost.createdAt}
                        />))
                    )
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        costs: getVisibleCosts(state.costs, state.filters),
    };
}

export default connect(mapStateToProps)(CostList);