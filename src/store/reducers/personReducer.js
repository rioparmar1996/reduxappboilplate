import { UPDATE_NAME } from "../actions/personAction";

const personReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case UPDATE_NAME:
			return { name: payload, email: state.email };
		//if you chnage a spcific part of props without affecting others
		//Object.assign({},state,{name:payload})
		//{}-target
		//state - source
		//{key : value } to set in props

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

export default personReducer;
