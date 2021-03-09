import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class PracticeForm extends React.Component {

    constructor(props){
        super(props);

        //Functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onInstrumentChange = this.onInstrumentChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onCalendarFocusChanged = this.onCalendarFocusChanged.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.parseDuration = this.parseDuration.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);

        // Need to check for default values.
        var defaultInstrument = "";
        var defaultType = "";
        if (this.props.instruments && this.props.instruments.length > 0){
            defaultInstrument = this.props.instruments[0]
            defaultType = defaultInstrument.type;
        }

        this.state = {
            instrumentList: this.props.instruments ? this.props.instruments : [],
            instrumentID: this.props.practice ? this.props.practice.instrumentID : defaultInstrument.id,
            practiceDate: this.props.practice ? moment(this.props.practice.practiceDate) : moment(),
            duration: this.props.practice ? this.props.practice.duration : "::",
            type: this.props.practice ? this.props.practice.type : defaultType,
            note: this.props.practice ? this.props.practice.note : "",
            calendarFocused: false,
            error: ''
        };
    };

    getUniqueTypes(listItems) { 
        var typesList = []
        listItems.forEach(element => {
            if (typesList.indexOf(element) === -1)
            {
                typesList.push(element);
            }
        });
        return typesList;
    }
    
    onSubmit(e){
        e.preventDefault();
        var error = '';
        if(!this.state.practiceDate || this.state.duration === "::" || !this.state.instrumentID){
            error = "Please provide the date, duration and instrument"
            this.setState(()=>({error}))
        } else {
            this.setState(()=>({error}))

            var durArray = this.parseDuration(this.state.duration);
            for(var key in durArray){
                while (durArray[key].length < 2){
                    durArray[key] = "0" + durArray[key]
                }
            }

            this.props.onSubmit({
                practiceDate: this.state.practiceDate.valueOf(),
                duration: durArray.hours + ":" + durArray.mins + ":" + durArray.secs,
                instrumentID : this.state.instrumentID,
                type: this.state.type,
                note: this.state.note
            })
        }
    }

    onInstrumentChange(evt){
        var newInstrument = this.state.instrumentList.filter((instrument)=>{
            return instrument.id === evt.target.value; 
        })
        this.setState({
            instrumentID: newInstrument[0].id,
            type: newInstrument[0].type
        })
    }

    onDateChange(practiceDate){
        if(practiceDate){
            this.setState(() => ({practiceDate}));
        }
    }

    onCalendarFocusChanged(calendarFocused){
        calendarFocused = calendarFocused["focused"]
        this.setState(() => ({calendarFocused}));
    }

    onDurationChange = (value) => (evt) => {
        var amount = evt.target.value;
        if (!amount || amount.match(/^\d{1,}?$/))
        {
            var durArr = this.parseDuration(this.state.duration);
            switch(value){
                case "hours":
                    durArr.hours = amount;
                    break;
                case "mins":
                    durArr.mins = amount;
                    break;
                case "secs":
                    durArr.secs = amount;
                    break;
                default:
                    break;
            }
            this.setState({
                duration: durArr.hours + ":" + durArr.mins + ":" + durArr.secs,
            })
        }
    }

    parseDuration(durationString){
        var arr = durationString.split(':');
        return {
            hours: arr[0],
            mins: arr[1],
            secs: arr[2]
        }
    }

    
    onTextChange = (value) => (evt) => {
        var newValue = evt.target.value;
        switch(value){
            case "duration":
                this.setState({
                    duration: newValue
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

    onTypeChange(evt){
        this.setState({
            type: evt.target.value
        })
    }

    render() {
        //Populating the instrument lists
        let instruments = this.props.instruments;
        let instrumentOptions = [];
        let instrumentTypeList = [];
        let instrumentTypes = [];
        if (instruments){
            // Get all the instrument types
            instrumentTypeList = instruments.map((instrument)=> {
                return instrument.type
            })

            //Create a unique array
            instrumentTypes = this.getUniqueTypes(instrumentTypeList);

            instrumentTypes = instrumentTypes.map((type)=> {
                    return <option key={type} value={type}>{type}</option>
            })

            //For Now
            instrumentOptions = instruments.map((instrument)=> {
                if (instrument.type.toLowerCase() === this.state.type.toLowerCase()){
                    return <option key={instrument.id} value={instrument.id}>{instrument.make} {instrument.model}</option>
                }
                return null;
            })
        }

        var durationData = this.parseDuration(this.state.duration);
        return (
            <div className="content-container">
                { this.state.instrumentList.length > 0 ? (
                    <form className="form" onSubmit={this.onSubmit}>
                        {this.state.error !== '' && <p className="form__error">{this.state.error}</p>}
                        <div className="form__input">
                            <label>Date</label>
                            <SingleDatePicker 
                                date={this.state.practiceDate}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onCalendarFocusChanged}
                                numberOfMonths={1}
                                isOutsideRange={()=> false}
                                block
                            />
                        </div>

                            <div className="form__input">
                                <label>Type</label>
                                <select className="select" onChange={this.onTypeChange} value={this.state.type}>
                                    {instrumentTypes}
                                </select>
                            </div>
                            <div className="form__input">
                                <label>Instrument</label>
                                <select className="select" onChange={this.onInstrumentChange} value={this.state.instrumentID}>
                                    {instrumentOptions}
                                </select>
                            </div>
                        <div className="form__input">
                            <label>Duration</label>
                            <div>
                                <input
                                    type="text"
                                    className="duration-input"
                                    placeholder="hh"
                                    maxLength={2}
                                    autoFocus
                                    value={durationData.hours}
                                    onChange={this.onDurationChange("hours")}
                                />
                                <input
                                    type="text"
                                    className="duration-input"
                                    placeholder="mm"
                                    maxLength={2}
                                    autoFocus
                                    value={durationData.mins}
                                    onChange={this.onDurationChange("mins")}
                                />
                                <input
                                    type="text"
                                    className="duration-input"
                                    placeholder="ss"
                                    maxLength={2}
                                    autoFocus
                                    value={durationData.secs}
                                    onChange={this.onDurationChange("secs")}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Notes</label>
                            <br/>
                            <textarea 
                                placeholder="Add a note about your practice"
                                className="textarea_practice"
                                value={this.state.note}
                                onChange={this.onTextChange("note")}
                            ></textarea>
                        </div>
                        <div>
                            <button className="button">Save Practice</button>
                        </div>
                    </form>
                    )
                    :
                    (
                        <div>No Instruments found. <Link to={`/instruments/create`}>Add an Instrument</Link></div>
                    )
                }
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        instruments: state.instruments
    };
}

export default connect(mapStateToProps)(PracticeForm);