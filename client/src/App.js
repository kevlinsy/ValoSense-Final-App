import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
//import Stats from "./components/Stats";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Stats from "./components/Stats";




function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/main" exact element={<Main />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/index" exact element={<Main />} />
			<Route path="/stats" exact element={<Stats/>} />

		</Routes>
	);
}

export default App;
