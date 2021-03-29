import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class CostForm extends React.Component {
    constructor(props){
        super(props);

        this.onTextChange = this.onTextChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onCalendarFocusChanged = this.onCalendarFocusChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state= {
            description: props.cost ? props.cost.description : '',
            instrument: props.cost ? props.cost.instrument : '',
            note: props.cost ? props.cost.note : '',
            amount: props.cost ? (props.cost.amount / 100).toString() : '',
            createdAt: props.cost ? moment(props.cost.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    onTextChange = (value) => (evt) => {
        var newValue = evt.target.value;
        switch(value){
            case "instrument":
                this.setState({
                    instrument: newValue
                });
                break;
            case "description":
                this.setState({
                    description: newValue
                });
                break;
            case "note":
                this.setState({
                    note: newValue
                });
                break;
            default:
                break;
        }
    }
    
    onAmountChange(e){
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({
                amount
            }));
        } else {

        }
    }
    
    onDateChange(createdAt){
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    }

    onCalendarFocusChanged(calendarFocused){
        calendarFocused = calendarFocused["focused"]
        this.setState(() => ({calendarFocused}));
    }
    
    onSubmit(e){
        e.preventDefault();
        var error = '';
        if(!this.state.createdAt ||!this.state.description || !this.state.amount){
            error = "Please provide a description, amount, and date"
            this.setState(()=>({error}))
        } else {
            this.setState(()=>({error}))
            this.props.onSubmit({
                description: this.state.description,
                instrument: this.state.instrument ? this.state.instrument : "No Instrument",
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error !== '' && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Instrument"
                    autoFocus
                    value={this.state.instrument}
                    onChange={this.onTextChange("instrument")}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onTextChange("description")}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onCalendarFocusChanged}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    block
                />
                <textarea 
                    placeholder="Add a note for your cost"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onTextChange("note")}
                >
                </textarea>
                <div>
                    <button className="button">Save Cost</button>
                </div>
            </form>
        )
    }

}