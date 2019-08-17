import React from "react";
import "./index.scss";

const Canvas = {
    width: "100%"
};

const div = {
    margin: "auto",
    width: "90%"
};

const experiences = [
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

class Experience2 extends React.Component {
    componentDidMount() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        let width = canvas.width;
        let height = canvas.height / 2 + 100;

        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(100, height);
        ctx.lineTo(width - 500, height);

        ctx.strokeStyle = "#34495E";

        let thereWidth = 0;
        let lines = [];
        let sizeFont = 80;

        for (let i = 1; i <= experiences.length; i++) {
            if (i === 1) {
                thereWidth = width / 9;
            } else {
                thereWidth = (width / (experiences.length + 1)) * i;
            }

            ctx.moveTo(thereWidth, height);
            ctx.lineTo(thereWidth + 100, height - 200);

            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(thereWidth + 105, height - 210, 15, 0, 2 * Math.PI);

            ctx.font = sizeFont + "px Roboto";
            ctx.fillText(
                experiences[i - 1].yearStart,
                thereWidth - 100,
                height + 150
            );

            lines = experiences[i - 1].name.split("\n");

            for (let j = 0; j < lines.length; j++) {
                ctx.fillText(
                    lines[j],
                    thereWidth + 100,
                    height - 250 - (lines.length - 1) * 100 + j * sizeFont
                );
            }

            ctx.stroke();
        }
    }

    render() {
        return (
            <div>
                <h2>Expérience Professionnel</h2>

                <div style={div} className="box">
                    <canvas
                        id="myCanvas"
                        width="5000"
                        height="1000"
                        style={Canvas}
                    />
                </div>
            </div>
        );
    }
}

const Experience = () => {
    return (
        <div className="experience">
            {experiences.map(exp => (
                <div className="experience_bar">
                    <div className="experience_bar_element">
                        <span />
                    </div>
                    <div className="experience_list-item">
                        <span className="experience_list-item_date">
                            {exp.start} - {exp.end}
                        </span>
                        <span className="experience_list-item_name">
                            {exp.name}
                        </span>
                    </div>
                </div>
            ))}
            <div className="experience_bar">
                <div className="element_bar-last" />
                <div/>
            </div>
        </div>
    );
};

export default Experience;
