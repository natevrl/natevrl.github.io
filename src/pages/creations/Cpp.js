import React from 'react';
import Deck_handler from '../../components/Deck_handler';
import Filterbar from '../../components/Filterbar';
import Header from '../../components/Header';

const Cpp = () => {
	return (
		<div className="main-contenair">
		<Header title={"> " + window.location.pathname}/>
		<div className="main-creations">
				<Filterbar />
				<Deck_handler tag="Cpp" />
		</div>
		</div>
	);
};

export default Cpp;