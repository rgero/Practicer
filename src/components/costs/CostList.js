import React from 'react';
import { connect } from 'react-redux';
import CostListItem from './CostListItem'
import {getVisibleCosts} from '../../selectors/costs';
import { sortCostByAmount, sortCostByDate, sortDirection } from '../../actions/filters'



// Idea: Make these headers clickable. If they are, we can process the sort by that way rather than having the drop downs.

export class CostList extends React.Component {
    constructor(props){
        super(props);

        this.sortBy = this.sortBy.bind(this);
        this.sortByCosts = this.sortByCosts.bind(this);
        this.sortByDate = this.sortByDate.bind(this);

        this.state = { 
            order: "descending",
            sortItem: "date"
        }
    };

    sortBy(newValue){
        // Check to see if they are the same
        if (this.state.sortItem === newValue)
        {
            // Switch Order
            if(this.state.order === "descending")
            {
                this.setState({order: "ascending"});
                this.props.sortDirection("ascending");
            } else {
                this.setState({order: "descending"});
                this.props.sortDirection("descending");                
            }
        } else {
            switch (newValue)
            {
                case "costs":
                    this.props.sortCostByAmount();
                    this.setState( {sortItem: "costs"});
                    break;
                case "date":
                    this.props.sortCostByDate();
                    this.setState( {sortItem: "date"});
                    break;
            }
        }
    }

    sortByCosts()
    {
        this.sortBy("costs");
    }

    sortByDate()
    {
        this.sortBy("date");
    }

    render(){
        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="show-for-mobile sortingHeader" onClick={this.sortByCosts}>Costs</div>
                    <div className="show-for-desktop sortingHeader" onClick={this.sortByDate}>Date</div>
                    <div className="show-for-desktop">Instrument</div>
                    <div className="show-for-desktop">Description</div>
                    <div className="show-for-desktop sortingHeader" onClick={this.sortByCosts}>Amount</div>
                </div>
                <div className="list-body">
                    {
                        this.props.costs.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No Costs</span>
                            </div>
                        ) : (
                            this.props.costs.map((cost, index) => (
                            <CostListItem 
                                id={cost.id}
                                instrument={cost.instrument}
                                description={cost.description}
                                amount={cost.amount}
                                createdAt={cost.createdAt}
                            />))
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        costs: getVisibleCosts(state.costs, state.filters),
    };
}

const mapDispatchToProps = (dispatch) => ({
    sortCostByDate: () => dispatch(sortCostByDate()),
    sortCostByAmount: () => dispatch(sortCostByAmount()),
    sortDirection: (e) => dispatch(sortDirection(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(CostList);