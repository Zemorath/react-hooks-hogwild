import React, { useState } from "react";
import Nav from "./Nav";
import Display from "./Display"
import hogsData from "../porkers_data"

function App() {
	const [hogs, setHogs] = useState(hogsData)
	return (
		<div className="App">
			<Nav />
			<Display hogs={hogs}/>
		</div>
	);
}

export default App;
