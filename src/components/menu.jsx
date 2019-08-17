import React from "react";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-inverse navbar-expand"
                    role="navigation"
                    id="navbar"
                >
                    <ul className="nav navbar-nav mr-auto nav-items">
                        <li>
                            <NavLink to={"/Home"} id="Home" className="link">
                                Accueil
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"/Abilities"}
                                id="Abilities"
                                className="link"
                            >
                                Capacité
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"/Experience"}
                                id="Experience"
                                className="link"
                            >
                                Expérience
                            </NavLink>
                        </li>

                        {/* <li>
							<NavLink to='/Hobbies' id="Hobbies" className="link">Hobbies</NavLink>
						</li> */}

                        <li>
                            <NavLink
                                to="/Contact"
                                id="Contact"
                                className="link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
