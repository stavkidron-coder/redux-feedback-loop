import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from'redux';
import { Provider } from 'react-redux';


// just a test to get up and running. Replace or delete when setting up for actual project
const testReducer = (state=0) => {
    console.log('Hello from testReducer');
    return state;
}

const storeInstance = createStore(
    combineReducers({
        testReducer
    })
)


ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
