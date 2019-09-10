import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import "./hamburgler.scss";

const Menu = () => {
    let [hideMenu, setHideMenu] = useState(true);
    let [menuClass, setMenuClass] = useState("");
    let [iconClass, setIconClass] = useState("hamburgler");

    const handleOnClick = () => {
        if (hideMenu) {
            setMenuClass("show-menu");
            setIconClass("hamburgler no-hamburgler");
        } else {
            setMenuClass("hide-menu");
            setIconClass("hamburgler");
        }
        setHideMenu(s => !s);
    };

    return (
        <div>
            <nav
                className="navbar navbar-inverse navbar-expand"
                role="navigation"
                id="navbar"
            >
                <div className="menu-icon" onClick={handleOnClick}>
                    <span className={iconClass}>
                        <div className="bun top"></div>
                        <div className="meat"></div>
                        <div className="bun bottom"></div>
                    </span>
                </div>
                <ul className={`nav navbar-nav mr-auto nav-items ${menuClass}`}>
                    <li>
                        <LinkMenu
                            to="Home"
                            name="Accueil"
                            click={handleOnClick}
                        />
                    </li>

                    <li>
                        <LinkMenu
                            to="Abilities"
                            name="Capacités"
                            click={handleOnClick}
                        />
                    </li>

                    <li>
                        <LinkMenu
                            to="Experience"
                            name="Experience"
                            click={handleOnClick}
                        />
                    </li>

                    <li>
                        <LinkMenu
                            to="Formation"
                            name="Formation"
                            click={handleOnClick}
                        />
                    </li>

                    <li>
                        <LinkMenu
                            to="Projects"
                            name="Projets"
                            click={handleOnClick}
                        />
                    </li>

                    <li>
                        <LinkMenu
                            to="Contact"
                            name="Contact"
                            click={handleOnClick}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const LinkMenu = ({ to, name, click }) => (
    <div onClick={click}>
        <NavLink to={`/${to}`} id={to} className="link">
            {name}
        </NavLink>
    </div>
);

export default Menu;
