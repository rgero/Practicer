import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortDirection } from '../../actions/filters'

export class InstrumentListFilters extends React.Component {

    constructor(props){
        super(props)
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSortDirectionChange = this.onSortDirectionChange.bind(this);
        this.state = {
            calendarFocus: null

        }
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
                <div className="input-group">
                    <div>
                        <input type="text" className="text-input" value={this.props.filters.text} onChange={this.onTextChange} />
                        </div>
                    <div>
                        <select className="select" value={this.props.filters.sortDirection} onChange={this.onSortDirectionChange} >
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
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
    sortDirection: (e) => dispatch(sortDirection(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentListFilters);
