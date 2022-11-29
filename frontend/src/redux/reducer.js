import axios from 'axios'

export const Auth = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            
            return action.payload;
        case 'LOGOUT':
            return {};

        default: 
            return state;
    }
}

export const Pets = (state = [], action) => {
    switch (action.type) {
        case 'REGISTER':
            const newPet = action.payload;
            axios.post('http://localhost:8080/auth/register', newPet)
            .then(result => {
                alert(result.data.status);
            });
        return [ ...state, newPet ];

        case 'LOAD_CURRENTUSER' :
            return [action.payload];
            
        case 'LOGOUT_CURRENTUSER' :
            return []

        default: 
        return state;
    }
}

export const Posts = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALLPOST':
            return action.payload
        default: 
        return state;
    }
}
