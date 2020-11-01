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

        //alert to say submitted successfully
        alert("Review successfully submitted!")
        
        //Navigate to next page
        this.props.history.push('/endpage');
    }

    feelingPage = () => {
        this.props.history.push('/');
    }

    understandingPage = () => {
        this.props.history.push('/understanding');
    }

    supportPage = () => {
        this.props.history.push('/support');
    }

    commentsPage = () => {
        this.props.history.push('/comments');
    }

    render(){
        return(
            <div>
                <h2>Review</h2>

                <ul className="reviewList">
                    <li>Feeling: {this.state.feeling}
                        <button onClick={this.feelingPage}>
                            Edit
                        </button>
                    </li>
                    <li>Understanding: {this.state.understanding}
                        <button onClick={this.understandingPage}>
                            Edit
                        </button>
                    </li>
                    <li>Support: {this.state.support}
                        <button onClick={this.supportPage}>
                            Edit
                        </button>
                    </li>
                    <li>Comments: {this.state.comments}
                        <button onClick={this.commentsPage}>
                            Edit
                        </button>
                    </li>
                </ul>

                <button onClick={this.nextPage}>Submit Review</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Review);