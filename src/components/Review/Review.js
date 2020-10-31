import Axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    state = {
        feeling: this.props.reduxState.reviewReducer[0],
        understanding: this.props.reduxState.reviewReducer[1],
        support: this.props.reduxState.reviewReducer[2],
        comments: this.props.reduxState.reviewReducer[3]
    }

    nextPage = () => {
        console.log(this.state);
        Axios({
            method: "POST",
            url: "prime_feedback",
            data: this.state
        }).then((response) => {
            console.log(response); 
          }).catch((error) => {
            console.log(error);   
          });
        
        //Navigate to next page
        // this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h2>Review</h2>

                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Review);