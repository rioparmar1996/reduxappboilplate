import "./App.css";
import update_person from "./store/actions/personAction";
import update_game from "./store/actions/gameAction";
import fetch_user from "./store/actions/userAction";
import { connect } from "react-redux";

// function updatePerson() {
// 	store.dispatch(update_person);
// }
// function updateGame() {
// 	store.dispatch(update_game);
// }

function App(props) {
	console.log(props);
	return (
		<div className="App">
			<h1>Redux Demo</h1>
			<button onClick={props.updatePerson}>Update Name</button>
			<button onClick={props.updateGame}>Update Game</button>
			<button onClick={props.updateUser}>Fetch Users</button>
			{/* <h2>Person name : {store.getState().person.name}</h2>
			<h2>Game name : {store.getState().game.name}</h2> without props */}
			<h2>Person name : {props.person.name}</h2>
			<h2>Game name : {props.game.name}</h2>
			{props.users.length === 0 ? (
				<p>No user found</p>
			) : (
				props.users.map((user) => (
					<p key={user.id}>
						{user.email} | {user.first_name} | {user.last_name}
					</p>
				))
			)}
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		game: state.game,
		person: state.person,
		users: state.users,
	};
}; // set state and props

const mapDispatchToProps = (dispatch) => {
	//maps disptach wioth props
	return {
		updateGame: () => {
			dispatch(update_game);
		},
		updatePerson: () => {
			dispatch(update_person);
		},
		updateUser: () => {
			dispatch(fetch_user);
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App); // connects with state and props
