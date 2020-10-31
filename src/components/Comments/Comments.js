import React, {Component} from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ""
    }

    handleInput = (event) => {
        // console.log(this.state.understanding); //console log for test
        this.setState({
            comments: event.target.value
        });
    }

    nextPage = () => {
        // send answer to reduxState
        this.props.dispatch({type: 'REVIEW', payload: this.state.comments});

        //Navigate to next page
        this.props.history.push('/review');
    }

    render(){
        return(
            <div>
                <h2>Any comments you want to leave?</h2>

                <label htmlFor="commentsInput">Enter any additional comments: </label>
                <input
                    id="commentsInput"
                    type="text"
                    onChange={(event) => this.handleInput(event)}>
                    </input>

                    <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Comments);