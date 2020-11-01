import React, {Component} from 'react';
import { connect } from 'react-redux';

class EndPage extends Component {

    state = {
        feeling: this.props.reduxState.reviewReducer[0],
        understanding: this.props.reduxState.reviewReducer[1],
        support: this.props.reduxState.reviewReducer[2],
        comments: this.props.reduxState.reviewReducer[3]
    }

    nextPage = () => {
        // dispatch to clear state
        this.props.dispatch({type: 'CLEAR'});
        //Navigate to next page
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h2>Thank you for filling out this survey!</h2>

                <button onClick={this.nextPage}>Retake Survey</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(EndPage);