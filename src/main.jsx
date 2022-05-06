import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Gondola_Entry from "./views/gondola_entry";
import Gondola_Exit from "./views/gondola_exit";
import Gondola_Consult from "./views/gondola_consult";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="gondola_entry" element={<Gondola_Entry />} />
			<Route path="gondola_exit" element={<Gondola_Exit />} />
			<Route path="gondola_consult" element={<Gondola_Consult />} />
		</Routes>
	</BrowserRouter>
);
