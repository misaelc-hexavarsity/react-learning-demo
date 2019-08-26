import actionTypes from "../actions/actionTypes";

const InitialState = {
	users: [],
	loading: true
}

export const mainReducer = (state = InitialState, action) => {
    switch (action.type) {
		case actionTypes.GET_USERS:
            return {
                ...state, users: action.payload.data
			}

		case actionTypes.DELETE_USER:
            return {
                ...state, users: state.users.filter(x => { return x.id !== action.payload })
			}
        default:
            break
    }
    return state
}

export default mainReducer;
