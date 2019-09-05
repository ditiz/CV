import React from "react";
import { experiences } from "./index";

const Canvas = {
    width: "100%"
};

const div = {
    margin: "auto",
    width: "90%"
};

class Experience extends React.Component {
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

export default Experience;
