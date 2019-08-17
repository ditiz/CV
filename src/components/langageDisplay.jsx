import React from "react";

class LangageDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: false
        };
    }

    showDescription(e) {
        this.setState({ showDescription: !this.state.showDescription });
    }

    render() {
        return (
            <div className="langage" onClick={e => this.showDescription(e)}>
                <div>
                    <h5>{this.props.langage.name}</h5>
                    <img
                        className="image-langage"
                        src={this.props.langage.image}
                        alt={this.props.langage.name}
                    />
                </div>

                {this.state.showDescription && (
                    <div className="description-langage">
                        {this.props.langage.description}
                    </div>
                )}
            </div>
        );
    }
}

export default LangageDisplay;
