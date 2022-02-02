import { UPDATE_GAME } from "../actions/gameAction";

const gameReducer = (state = {}, { type, payload }) => {
	//its advices to use swtich case rather than if
	switch (type) {
		case UPDATE_GAME:
			return { name: payload };

		default:
			return state;
	}
	// if (type === "UPDATE_GAME") {
	// 	// check if type is corretion to perform action
	// 	return { name: payload }; // return the chnage vale of state
	// }
	// return state;
};

export default gameReducer;
