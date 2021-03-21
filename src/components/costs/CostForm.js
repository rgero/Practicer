import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class CostForm extends React.Component {
    constructor(props){
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onCalendarFocusChanged = this.onCalendarFocusChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state= {
            description: props.cost ? props.cost.description : '',
            note: props.cost ? props.cost.note : '',
            amount: props.cost ? (props.cost.amount / 100).toString() : '',
            createdAt: props.cost ? moment(props.cost.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(()=>({
            description
        }));
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
        this.setState(() => ({calendarFocused}));
    }

    onNoteChange(e) {
        const note = e.target.value;
        this.setState(()=> ({note}));
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
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
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
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Cost</button>
                </div>
            </form>
        )
    }

}