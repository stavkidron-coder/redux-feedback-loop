import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
// import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    console.log('Mounted');
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>

          {/* <Feeling/>
          <Understanding/>
          <Support/>
          <Comments/> */}

          <Route exact path="/" component={Feeling}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/comments" component={Comments}/>

        </div>
      </Router>
    );
  }
}

export default App;