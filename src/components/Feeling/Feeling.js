// import Axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0
    }

    handleInput = (event) => {
        // console.log(this.state.feeling); //console log used for testing
        this.setState({
            feeling: Number(event.target.value)
        });
    }

    nextPage = () => {
        // send answer to reduxState
        this.props.dispatch({type: 'REVIEW', payload: this.state.feeling});

        //Navigate to next page
        this.props.history.push('/understanding');
    }

    render(){
        return(
            <div>
                <h2>How are you feeling today?</h2>

                <label htmlFor="feelingInput">Choose a number between 1 and 6: </label>
                <input
                    id="feelingInput"
                    type="number"
                    onChange={(event) => this.handleInput(event)}
                    min="1"
                    max="6">
                    </input>

                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Feeling)