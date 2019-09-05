import React from "react";
import ExperienceElement from "./element";
import "./index.scss";

export const experiences = [
    {
        name: "Formation au Campus Numérique in the Alps\nAlternance à Spartoo",
        link: "https://digital-grenoble.com/campus-numerique-in-the-alps/",
        start: "2016",
        end: "2018"
    },
    {
        name: "Développeur web chez Spartoo",
        link: "https://spartoo.com",
        start: "2018",
        end: "2019"
    },
    {
        name: "Développeur web chez Nexus/Optim",
        link: "https://fr-fr.nexus-ag.de/home",
        start: "2019",
        end: "Aujourd'hui"
    }
];

const Experience = () => {
    return (
        <div className="experience">
            {experiences.map(exp => (
                <ExperienceElement experience={exp} key={exp.name} />
            ))}
            <div className="experience_bar">
                <div className="element_bar-last" />
                <div />
            </div>
        </div>
    );
};

export default Experience;
