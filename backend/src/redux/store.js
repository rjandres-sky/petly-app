import { configureStore, createStore} from '@reduxjs/toolkit'

//import reducer
//import reducer from './reducer'
import allReducers from './combinedReducer';


//const store = creaStore (reducer);
const store = createStore(allReducers);

export default store;