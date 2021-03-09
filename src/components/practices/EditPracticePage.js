import React from 'react';
import {connect} from 'react-redux';
import PracticeForm from './PracticeForm';
import { editPractice, removePractice } from '../../actions/practices';

export class EditPracticePage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onSubmit(practice){
        this.props.onSubmit(this.props.practice.id, practice);
        this.props.history.push('/practices')
    }

    removeItem(){
        this.props.removeItem(this.props.practice.id);
        this.props.history.push('/practices')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Practice</h1>
                    </div>
                </div>
                <div className="content-container">
                    <PracticeForm
                        practice= {this.props.practice}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.removeItem}>Remove</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, practice) => { 
            dispatch(editPractice(id, practice))
        },
        removeItem: (id) => dispatch(removePractice(id)),
    }
}

const mapStateToProps = (state, props) => {
    return {
        practice: state.practices.find((practice) => practice.id === props.match.params.id)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPracticePage); // Check out the react-redux documentation to understand the connect statement here.