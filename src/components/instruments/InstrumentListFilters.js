import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortBy } from '../../actions/filters'

export class InstrumentListFilters extends React.Component {

    constructor(props){
        super(props)
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.state = {
            calendarFocus: null

        }
    }

    onFocusChange(calendarFocus){
        this.setState({
            calendarFocus
        })
    }

    onSortChange(e){
        this.props.sortBy(e.target.value);
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
                        <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange} >
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
    sortBy: (e) => dispatch(sortBy(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentListFilters);
