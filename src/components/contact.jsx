import React from 'react';

class Contact extends React.Component {

	constructor (props){
		super(props);

		this.mail = React.createRef();
		this.phone = React.createRef();
	}

	componentDidMount () {

		//img
		let imgMail = document.createElement("img");
		imgMail.setAttribute('src', 'https://cdn3.iconfinder.com/data/icons/business-8/512/E-mail_open-512.png');
		this.mail.current.appendChild(imgMail);

		//phone
		let imgPhone = document.createElement("img");
		imgPhone.setAttribute('src', 'https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/phone-call-active-512.png');
		this.phone.current.appendChild(imgPhone);
	}
	
	render () {
		return (
			<div className="contact">
				<h2>Contact</h2>

				<div className="box box-blue">
					<span ref={this.mail}></span>
					<p>mathieu.smarzyk@hotmail.fr</p>
				</div>

				<div className="box box-green">
					<span ref={this.phone}></span>
					<p>06 44 30 33 02</p>
				</div>
			</div>
		)
	} 
}

export default Contact;