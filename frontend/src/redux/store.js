import { configureStore} from '@reduxjs/toolkit'

//import reducer
import reducer from './reducer'

//const store = creaStore (reducer);
const store = configureStore({reducer: reducer});

export default store