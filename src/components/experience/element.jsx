import React, { useState } from "react";

const ExperienceElement = ({ experience }) => {
    const [className, setClassName] = useState("experience_bar_element");
    const enterHandle = () => {
        setClassName("experience_bar_element experience_bar_element_hover");
    };

    const leaveHandle = () => {
        setClassName("experience_bar_element");
    };

    return (
        <div className="experience_bar">
            <div className={className}>
                <span>
                    <span />
                </span>
            </div>
            <div
                className="experience_list-item"
                onMouseEnter={enterHandle}
                onMouseLeave={leaveHandle}
            >
                <div>
                    <div className="experience_list-item_date">
                        <span>
                            {experience.start} - {experience.end}
                        </span>
                    </div>
                    <div className="experience_list-item_name">
                        <span>{experience.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceElement;
