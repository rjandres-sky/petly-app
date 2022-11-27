import axios from 'axios'

const initialState = {
    allPets : []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            const newPet = action.payload;
            axios.post('http://localhost:8080/auth/register', newPet).then(result => {
                alert(result.data.status);
            });
            return { ...state, allPets: [ ...state.allPets, newPet ]};

        default: 
        return state;
    }
}

export default reducer