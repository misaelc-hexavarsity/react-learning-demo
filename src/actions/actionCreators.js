import actionTypes from '../actions/actionTypes';
import API from "../middleware/api";

export function getUsers() {
	return dispatch => {
        API.get('/users')
            .then(result => {                
                dispatch({
                    type: actionTypes.GET_USERS,
                    payload: result.data
                })
            })
    }
}

export function deleteUser(id) {
	return dispatch => {                
		dispatch({
			type: actionTypes.DELETE_USER,
			payload: id
		})
    }
}