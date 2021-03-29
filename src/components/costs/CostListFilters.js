import React from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortCostByAmount, sortCostByDate, sortDirection, setStartDate, setEndDate } from '../../actions/filters'


export class CostListFilters extends React.Component {

    constructor(props){
        super(props)
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onCostSortChange = this.onCostSortChange.bind(this);
        this.onSortDirectionChange = this.onSortDirectionChange.bind(this);
        this.state = {
            calendarFocus: null
        }
    }

    onDatesChange({startDate, endDate}){
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange(calendarFocus){
        this.setState({
            calendarFocus
        })
    }

    onCostSortChange(e){
        const selected = e.target.value;
        if(selected === "date"){
            this.props.sortCostByDate();
        } else {
            this.props.sortCostByAmount();
        } 
    }

    onSortDirectionChange(e){
        this.props.sortDirection(e.target.value);
    }

    onTextChange(e){
            this.props.setTextFilter(e.target.value)
    }

    render(){
        return(
            <div className="content-container">
                <div className="input-group">
                    <div>
                        <input type="text" className="text-input" value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocus}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}
                            showClearDates={true}
                            block
                        />
                    </div>
                </div>
                <div className="input-group-close">
                    <div>
                        <select className="select" value={this.props.filters.sortCostBy} onChange={this.onCostSortChange} >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div>
                        <select className="select" value={this.props.filters.sortDirection} onChange={this.onSortDirectionChange} >
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortCostByDate: () => dispatch(sortCostByDate()),
    sortCostByAmount: () => dispatch(sortCostByAmount()),
    sortDirection: (e) => dispatch(sortDirection(e)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(CostListFilters);
