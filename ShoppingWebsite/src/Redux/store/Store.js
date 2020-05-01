import { createStore } from 'redux';
import allReducers from './../Reducers/Combine Reducers'

let store = createStore(allReducers);

export default store;