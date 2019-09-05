import React from "react";
import Element from "./element";

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
            {formations.map(exp => (
                <Element formations={exp} key={exp.name} />
            ))}
            <div className="formations_bar">
                <div className="element_bar-last" />
                <div />
            </div>
        </div>
    );
};

export default Formations;
