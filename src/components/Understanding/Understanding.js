import React, {Component} from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleInput = (event) => {
        // console.log(this.state.understanding); //console log for test
        this.setState({
            understanding: Number(event.target.value)
        });
    }

    nextPage = () => {
        // send answer to reduxState
        this.props.dispatch({type: 'REVIEW', payload: this.state.understanding});

        //Navigate to next page
        this.props.history.push('/support');
    }

    render(){
        return(
            <div>
                <h2>How well are you understanding the content?</h2>

                <label htmlFor="understandingInput">Choose a number between 1 and 6: </label>
                <input
                    id="understandingInput"
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
export default connect(putReduxStateOnProps)(Understanding);