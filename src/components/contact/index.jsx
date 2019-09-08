import React from "react";
import "./index.scss";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.mail = React.createRef();
        this.phone = React.createRef();
    }

    componentDidMount() {
        //img
        let imgMail = document.createElement("img");
        imgMail.setAttribute(
            "src",
            "./img/contact/mail.png"
        );
        this.mail.current.appendChild(imgMail);

        //phone
        let imgPhone = document.createElement("img");
        imgPhone.setAttribute(
            "src",
            "./img/contact/phone.png"
        );
        this.phone.current.appendChild(imgPhone);
    }

    render() {
        return (
            <div className="contact">
                <h2>Contact</h2>

                <div className="box box-blue">
                    <span ref={this.mail}></span>
                    <a href="mailto:mathieu.smarzyk@hotmail.fr">
                        mathieu.smarzyk@hotmail.fr
                    </a>
                </div>

                <div className="box box-green">
                    <span ref={this.phone}></span>
                    <a href="tel:06-44-30-33-02">06 44 30 33 02</a>
                </div>
            </div>
        );
    }
}

export default Contact;
