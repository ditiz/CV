import React from "react";
import abilitiesList from "./listLangages";
import LangageDisplay from "./langageDisplay";

class Abilities extends React.Component {
    constructor(props) {
        super(props);

        this.abilities = abilitiesList;
    }

    render() {
        return (
            <div id="abilities">
                <h2>Capacité</h2>

                <div>
                    <div className="frontend">
                        <h3>Technologies côté client</h3>
                        <div className="front-langage">
                            <div className="HTML group-langage">
                                {this.abilities["front-end"]["HTML"].map(
                                    langage => (
                                        <div className="pouet" key={langage.name}>
                                            <LangageDisplay langage={langage} />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="css group-langage">
                                {this.abilities["front-end"]["CSS"].map(
                                    langage => (
                                        <div key={langage.name}>
                                            <LangageDisplay langage={langage} />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="javascript group-langage">
                                {this.abilities["front-end"]["javascript"].map(
                                    langage => (
                                        <div key={langage.name}>
                                            <LangageDisplay langage={langage} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="backend">
                        <h3>Technologies côté serveur</h3>
                        <div className="back-langage">
                            <div className="group-langage">
                                {this.abilities["back-end"].map(langage => (
                                    <div key={langage.name}>
                                        <LangageDisplay langage={langage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bdd">
                        <h3>Base de données</h3>
                        <div className="bdd-langage">
                            <div className="group-langage">
                                {this.abilities["bdd"].map(langage => (
                                    <div key={langage.name}>
                                        <LangageDisplay langage={langage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="markup">
                        <h3>Markup Langage</h3>
                        <div className="markup-langage">
                            <div className="group-langage">
                                {this.abilities["other"]["Markup Language"].map(
                                    langage => {
                                        return (
                                            <div key={langage.name}>
                                                <LangageDisplay
                                                    langage={langage}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="versionning">
                        <h3>Markup Langage</h3>
                        <div className="versionning-langage">
                            <div className="group-langage">
                                {this.abilities["other"]["versionning"].map(
                                    langage => (
                                        <div key={langage.name}>
                                            <LangageDisplay langage={langage} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abilities;
