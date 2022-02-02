import { UPDATE_USER } from "../actions/userAction";

const userReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case UPDATE_USER:
			return payload;

		default:
			return state;
	}
	// //update the reducer with action and state
	// if (actions.type === "UPDATE_NAME") {
	// 	// check if type is corretion to perform action
	// 	return { name: actions.payload }; // return the chnage vale of state
	// }
	// return state; //step 5 add a state to reducer to check if its show state to browser console.
};

export default userReducer;
