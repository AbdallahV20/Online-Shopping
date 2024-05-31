import { createStore ,applyMiddleware, combineReducers } from 'redux'
import { reducer } from './Reducer'
import {thunk} from 'redux-thunk';
export const store = createStore(combineReducers({
    main_products:reducer
}),applyMiddleware(thunk))