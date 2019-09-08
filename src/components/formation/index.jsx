import React from "react";
import Element from "./element";
import "./index.scss";

const formations = [
    {
        name: "Bac STID SIN",
        yearStart: 2011,
        yearEnd: 2014
    },
    {
        name: "License Informatique",
        yearStart: 2014,
        yearEnd: 2016
    },
    {
        name: "Campus numérique in the Alps",
        yearStart: 2016,
        yearEnd: 2018
    }
];

const Formations = () => {
    return (
        <div className="formations">
            {formations.map(formation => (
                <Element formation={formation} key={formation.name} />
            ))}
            <div className="formation_bar">
                <div className="formation_bar_element-wrapper">
                    <div className="formation-element_bar-last" />
                </div>
                <div />
            </div>
        </div>
    );
};

export default Formations;
