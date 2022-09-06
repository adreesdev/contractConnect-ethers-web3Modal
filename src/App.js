import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/Home";
import NetworkModal from "./components/NetworkModal";

const App = () => {
	const [switchNetwork, setSwitchNetwork] = useState(false);

	return (
		<>
			<NetworkModal open={switchNetwork} setOpen={setSwitchNetwork} />
			<Header />
			<Home />
		</>
	);
};

export default App;
