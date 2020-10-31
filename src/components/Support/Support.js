import React, {Component} from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: 0
    }

    handleInput = (event) => {
        // console.log(this.state.understanding); //console log for test
        this.setState({
            support: Number(event.target.value)
        });
    }

    nextPage = () => {
        // send answer to reduxState
        this.props.dispatch({type: 'REVIEW', payload: this.state.support});

        //Navigate to next page
        this.props.history.push('/comments');
    }

    render(){
        return(
            <div>
                <h2>How well are you being supported?</h2>

                <label htmlFor="supportInput">Choose a number between 1 and 6: </label>
                <input
                    id="supportInput"
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
export default connect(putReduxStateOnProps)(Support);