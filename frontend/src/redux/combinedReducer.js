import { combineReducers } from "redux"

import { Auth, Pets, Posts } from "./reducer"

const allReducers = combineReducers({
    Pets : Pets,
    Posts : Posts,
    Auth : Auth

})

export default allReducers