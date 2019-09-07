import React, { useState } from "react";

const Element = ({ formation }) => {
    const [className, setClassName] = useState("formation_bar_element");

    const enterHandle = () => {
        setClassName("formation_bar_element formation_bar_element_hover");
    };

    const leaveHandle = () => {
        setClassName("formation_bar_element");
    };

    return (
        <div className="formation_bar">
            <div className={className}>
                <span>
                    <span />
                </span>
            </div>
            <div
                className="formation_list-item"
                onMouseEnter={enterHandle}
                onMouseLeave={leaveHandle}
            >
                <div>
                    <div className="formation_list-item_date">
                        <span>
                            {formation.yearStart} - {formation.yearEnd}
                        </span>
                    </div>
                    <div className="formation_list-item_name">
                        <span>{formation.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Element;
