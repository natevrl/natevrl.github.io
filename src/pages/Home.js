import React from 'react';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Header from '../components/Header';

 
const Home = () => {
	return (
		<div className="main-contenairr">
			<Header title={"> /home"} />
			<div className='home'>
				<div className='home-main'>
					<Typist avgTypingDelay={110}>
						<span className="type-title">
							{"Hello, "}
							<span className="type-name">{"Nathan"}</span>
							{" here."}
						</span>
					</Typist>
					<div className='under-title'>Completed 30+ projects in less than 1 year</div>
					<div className='home-text'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and orem Ipsum passages, and more recently with desktop publishing software.
					</div>

					<NavLink exact to="/creations/" activeClassName="active"><span className='home-button'>Check out my work <FaArrowRight className='icon' /></span></NavLink>
				</div>
				<img src="./media/photo-intra.jpg" alt="profil-picture" />
			</div>
		</div>
	);
};

export default Home;