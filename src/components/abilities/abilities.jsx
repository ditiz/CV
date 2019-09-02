import React from "react";
import abilitiesList from "./listLanguages";
import LanguageDisplay from "./languageDisplay";
import "./index.scss";

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
                        <div className="front-language">
                            <div className="HTML group-language">
                                {this.abilities["front-end"]["HTML"].map(
                                    language => (
                                        <div
                                            className="language-name"
                                            key={language.name}
                                        >
                                            <LanguageDisplay
                                                language={language}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="css group-language">
                                {this.abilities["front-end"]["CSS"].map(
                                    language => (
                                        <div key={language.name}>
                                            <LanguageDisplay
                                                language={language}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="javascript group-language">
                                {this.abilities["front-end"]["javascript"].map(
                                    language => (
                                        <div key={language.name}>
                                            <LanguageDisplay
                                                language={language}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="backend">
                        <h3>Technologies côté serveur</h3>
                        <div className="back-language">
                            <div className="group-language">
                                {this.abilities["back-end"].map(language => (
                                    <div key={language.name}>
                                        <LanguageDisplay language={language} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bdd">
                        <h3>Base de données</h3>
                        <div className="bdd-language">
                            <div className="group-language">
                                {this.abilities["bdd"].map(language => (
                                    <div key={language.name}>
                                        <LanguageDisplay language={language} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="markup">
                        <h3>Markup language</h3>
                        <div className="markup-language">
                            <div className="group-language">
                                {this.abilities["other"]["Markup Language"].map(
                                    language => {
                                        return (
                                            <div key={language.name}>
                                                <LanguageDisplay
                                                    language={language}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="versionning">
                        <h3>Markup language</h3>
                        <div className="versionning-language">
                            <div className="group-language">
                                {this.abilities["other"]["versionning"].map(
                                    language => (
                                        <div key={language.name}>
                                            <LanguageDisplay
                                                language={language}
                                            />
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
