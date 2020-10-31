import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



// // feeling reducer
// const feelingReducer = (state=0, action) => {
//     if(action.type === 'FEELING'){
//         console.log('Feeling:', action.payload);
//         state = action.payload;
//         return state;
//     }
//     return state;
// }

// // understanding reducer
// const understandingReducer = (state=0, action) => {
//     if(action.type === 'UNDERSTANDING'){
//         console.log('Understanding:', action.payload);
//         state = action.payload
//         return state;
//     }
//     return state;
// }

// // support reducer
// const supportReducer = (state=0, action) => {
//     if(action.type === 'SUPPORT'){
//         console.log('Support:', action.payload);
//         state = action.payload
//         return state;
//     }
//     return state;
// }

const reviewReducer = (state=[], action) => {
    switch(action.type){
        case 'REVIEW':
            console.log([...state, action.payload]);
            return [...state, action.payload];
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
