import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

export class CostStatsForm extends React.Component {


    calculateStats()
    {
        var total = 0;
        var average = 0;
        if (this.props.costs.length > 0)
        {
            // Calculate Total
            this.props.costs.filter((cost) => {
                total+=cost.amount;
            })

            // Calculate Average
            average = total / this.props.costs.length
        }
        total = numeral((total/100)).format('$0,0.00');
        average = numeral((average/100)).format('$0,0.00');
        return {total, average};
    }

    render() 
    {
        var displayValues = this.calculateStats();
        return (
            <div>
                <div>Total: {displayValues["total"]}</div>
                <div>Average: {displayValues["average"]}</div>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        costs: state.costs
    };
}

export default connect(mapStateToProps)(CostStatsForm);