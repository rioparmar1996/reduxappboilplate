// import redux
import { useReducer } from "react";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
//import reducers
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import userReducer from "./reducers/userReducer";
// //import actions
// import update_person from "./actions/personAction";
// import update_game from "./actions/gameAction";

//combineReducers to reslove multiple reducers
const AllReducers = combineReducers({
	person: personReducer,
	game: gameReducer,
	users: userReducer,
});

// intitial state of store
const InitialState = {
	game: { name: "Football" },
	person: { name: "Ritesh", email: "ritesh.parmar1096@gmail.com" },
	users: [],
};

const middleware = [thunk];
// create a store with combine reducer and intial state
const store = createStore(
	AllReducers,
	InitialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
