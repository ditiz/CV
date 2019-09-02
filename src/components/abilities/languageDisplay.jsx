import React from "react";

class languageDisplay extends React.Component {
    constructor(props) {
        super(props);

        let className;
        switch(this.props.language.display) {
            case "large-width": 
                className = "language language-width";
                break;
            case "extra-large-width":
                className = "language language-extra-width";
                break;
            default: 
                className = "language"
                break;
        }

        this.state = {
            showDescription: false,
            className: className
        };
    }

    showDescription(e) {
        this.setState({ showDescription: !this.state.showDescription });
    }

    render() {
        return (
            <div
                className={
                    this.state.showDescription
                        ? `${this.state.className} language-show`
                        : this.state.className
                }
                onClick={e => this.showDescription(e)}
            >
                <div className="image-language-box">
                    <h5>{this.props.language.name}</h5>
                    <img
                        className="image-language"
                        src={this.props.language.image}
                        alt={this.props.language.name}
                    />
                </div>

                <div className="description-language">
                    {this.props.language.description}
                </div>
            </div>
        );
    }
}

export default languageDisplay;
