import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from'redux';
import { Provider } from 'react-redux';


// feeling reducer
const feeling = (state=0, action) => {
    if(action.type === 'FEELING'){
        console.log('Feeling:', action.payload);
        state = action.payload;
        return state;
    }
    return state;
}

const understandingReducer = (state=0, action) => {
    if(action.type === 'UNDERSTANDING'){
        console.log('Understanding:', action.payload);
        state = action.payload
        return state;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling,
        understandingReducer
    })
)


ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
