import React from 'react';

export default class InstrumentForm extends React.Component {

    constructor(props){
        super(props);

        //Functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);


        this.state= {
            type: props.instrument ? props.instrument.type : "",
            make: props.instrument ? props.instrument.make : "",
            model: props.instrument ? props.instrument.model : "",
            color: props.instrument ? props.instrument.color : "",
            nickname: props.instrument ? props.instrument.nickname : "",
            serial: props.instrument ? props.instrument.serial : "",
            note: props.instrument ? props.instrument.note : "",
            error: ''
        };
    };
    
    onSubmit(e){
        e.preventDefault();
        var error = '';
        if(!this.state.type || !this.state.make || !this.state.model){
            error = "Please provide the make, model and type"
            this.setState(()=>({error}))
        } else {
            this.setState(()=>({error}))
            this.props.onSubmit({
                type: this.state.type.replace(/^\w/, c => c.toUpperCase()),
                make: this.state.make,
                model: this.state.model,
                color: this.state.color,
                nickname: this.state.nickname,
                serial: this.state.serial,
                note: this.state.note
            })
        }
    }

    onTextChange = (value) => (evt) => {
        var newValue = evt.target.value;
        switch(value){
            case "type":
                this.setState({
                    type: newValue
                });
                break;
            case "make":
                this.setState({
                    make: newValue
                });
                break;
            case "model":
                this.setState({
                    model: newValue
                });
                break;
            case "color":
                this.setState({
                    color: newValue
                });
                break;
            case "serial":
                this.setState({
                    serial: newValue
                });
                break;
            case "nickname":
                this.setState({
                    nickname: newValue
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

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error !== '' && <p className="form__error">{this.state.error}</p>}
                
                {/* Type */}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Type"
                    autoFocus
                    value={this.state.type}
                    onChange={this.onTextChange("type")}
                />

                {/* Make */}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Make"
                    autoFocus
                    value={this.state.make}
                    onChange={this.onTextChange("make")}
                />

                {/* Model */}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Model"
                    autoFocus
                    value={this.state.model}
                    onChange={this.onTextChange("model")}
                />

                {/* Color */}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Color"
                    autoFocus
                    value={this.state.color}
                    onChange={this.onTextChange("color")}
                />

                {/* Serial Number */}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Serial Number"
                    autoFocus
                    value={this.state.serial}
                    onChange={this.onTextChange("serial")}
                />

                {/* Nickname */}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Nickname"
                    autoFocus
                    value={this.state.nickname}
                    onChange={this.onTextChange("nickname")}
                />

                {/* Notes */}
                <textarea 
                    placeholder="Add a note about your instrument"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onTextChange("note")}
                >
                </textarea>

                <div>
                    <button className="button">Save Instrument</button>
                </div>
            </form>
        )
    }

}