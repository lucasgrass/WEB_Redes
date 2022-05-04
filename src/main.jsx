import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/home";
import Gondola_Entry from "./views/gondola_entry";
import Gondola_Exit from "./views/gondola_exit";
import Gondola_Consult from "./views/gondola_consult";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Gondola_Entry />
	</React.StrictMode>
);
