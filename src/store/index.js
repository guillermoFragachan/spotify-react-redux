import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import mainReducer from './reducers/index.js'

import thunk from 'redux-thunk'
import likesReducer from './reducers/likes.js'


const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const initialState = {
likes: {
    elements: []
}
}


const configureStore = createStore(likesReducer, initialState, aComposeThatAlwaysWorks(applyMiddleware(thunk)))


export default configureStore