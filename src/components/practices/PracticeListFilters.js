import React from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortDirection, setStartDate, setEndDate } from '../../actions/filters';


export class PracticeListFilters extends React.Component {

    constructor(props){
        super(props)
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
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
                    <div className="input-group__item">
                        <input type="text" className="text-input" value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortDirection} onChange={this.onSortDirectionChange} >
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId = {"0"}
                            endDateId = {"1"}
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
    sortDirection: (e) => dispatch(sortDirection(e)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(PracticeListFilters);
