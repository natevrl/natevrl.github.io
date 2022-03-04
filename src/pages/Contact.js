import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Contact = () => {
	return (
		<div className="main-contenairr">
			<Header title={"> " + window.location.pathname} />
			<div className='contact'>
				<div className='home-title'>/Home</div>
				<div className='home-main'>
					<div className='home-text'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</div>
					<img src="./media/photo-intra.jpg" alt="profil-picture" />
				</div>

			</div>
		</div>
	);
};

export default Contact;