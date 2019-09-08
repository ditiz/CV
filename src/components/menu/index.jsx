import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import "./hamburgler.scss";

const Menu = () => {
    let showMenu = false;
    const ref = createRef(null);
    const refIcon = createRef(null);

    const handleOnClick = () => {
        showMenu = !showMenu;
        if (showMenu) {
            ref.current.style.display = "flex";
            refIcon.current.classList.add("no-hamburgler");
        } else {
            ref.current.style.display = "none";
            refIcon.current.classList.remove("no-hamburgler");
        }
    };

    return (
        <div>
            <nav
                className="navbar navbar-inverse navbar-expand"
                role="navigation"
                id="navbar"
            >
                <div className="menu-icon" onClick={handleOnClick}>
                    <span className="hamburgler" ref={refIcon}>
                        <div className="bun top"></div>
                        <div className="meat"></div>
                        <div className="bun bottom"></div>
                    </span>
                </div>
                <ul className="nav navbar-nav mr-auto nav-items" ref={ref}>
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
                            Capacités
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/Experience"}
                            id="Experience"
                            className="link"
                        >
                            Expériences
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/Formation"}
                            id="Formation"
                            className="link"
                        >
                            Formations
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/Projects" id="Projects" className="link">
                            Projets
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/Contact" id="Contact" className="link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
