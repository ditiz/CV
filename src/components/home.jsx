import React from 'react';

class Home extends React.Component {
	
	render() {
		return (
			<div>
				<h2>À propos</h2>
				<div className='box box-blue presentation'>
					<p>Bonjour, je suis Mathieu Smarzyk</p>
					<p>
						Développeur web passionné par son travail 
						et désireux de développer ses compétences,

						J'ai eu le plaisir de pouvoir travailler chez Spartoo.com
						où j'ai pu apprendre énormement de chose dans le domaine du 
						webmarketing.

						Après l'obtention de mon diplôme j'ai continué 
						mon apprentissage en travaillant sur des projets personnels
						sur mon temps libre.
					</p>
				</div>
			</div>
		);
	}
}

export default Home;