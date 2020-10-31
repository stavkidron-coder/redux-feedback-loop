import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const reviewReducer = (state=[], action) => {
    switch(action.type){
        case 'REVIEW':
            console.log([...state, action.payload]);
            return [...state, action.payload];
        case 'CLEAR':
            // console.log(state);
            return [];
        default:
            return state;
    }
    
}


const storeInstance = createStore(
    combineReducers({
        reviewReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
