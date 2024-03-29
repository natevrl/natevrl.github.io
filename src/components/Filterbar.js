import React from "react";
import { NavLink } from "react-router-dom";

const Filterbar = (props) => {
	return (
		<div className="filter-bar">
			<NavLink to="/projects/all" activeclassname="active">
				<span>All</span>
			</NavLink>
			<NavLink to="/projects/web" activeclassname="active">
				<span>Web</span>
			</NavLink>
			<NavLink to="/projects/c" activeclassname="active">
				<span>C</span>
			</NavLink>
			<NavLink to="/projects/unix" activeclassname="active">
				<span>Unix/Bash</span>
			</NavLink>
		</div>
	);
};

export default Filterbar;
