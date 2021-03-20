import React from 'react';
import {connect} from 'react-redux';
import PracticeForm from './PracticeForm';
import { addPractice } from '../../actions/practices';

import {uid} from 'uid';

export class AddPracticePage extends React.Component {

    constructor(props){
        super(props);
        
        //Functions
        this.onSubmit = this.onSubmit.bind(this);
    };
    
    onSubmit(practice){

        // Add a temporary ID
        practice.id = uid(22);

        this.props.onSubmit(practice);
        this.props.history.push('/practices/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Practice</h1>
                    </div>
                </div>
                <div className="content-container">
                    <PracticeForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (practice) => dispatch(addPractice(practice))
    }
}


export default connect(undefined, mapDispatchToProps)(AddPracticePage);