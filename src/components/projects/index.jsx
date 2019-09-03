import React from "react";
import "./index.scss";

const projects = [
    {
        name: "traduction-musik",
        description: `Site aider l'utilisateur a traduit des paroles par musiques.`,
        link: "https://traduction-musik.projets.mathieu.smarzyk.com/",
        img: "./img/projects/trad-musik.png"
    },
    {
        name: "dev-log",
        description: `Site permettant de gérer ses snippets de code.`,
        link: "https://dev-log.projets.mathieu.smarzyk.com/",
        img: "./img/projects/dev-log.png"
    }
];

const githubLink = "https://github.com/ditiz";

const Projects = () => {
    return (
        <div className="projects">
            <div className="github">
                <div className="img">
                    <a href={githubLink} target="_blank">
                        <img src="./img/projects/github.png" alt="github_img" />
                    </a>
                </div>
                <div className="infos">
                    <div className="presentation">Lien vers mon Github</div>
                    <div className="detail">
                        <span>Lien:</span>
                        <a href={githubLink} target="_blank">{githubLink}</a>
                    </div>
                </div>
            </div>

            {projects.map(p => (
                <div className="project">
                    <div className="project-image">
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={p.img} alt="img" />
                        </a>
                    </div>
                    <div className="project-infos">
                        <div>
                            <span>Nom:</span>
                            {p.name}
                        </div>
                        <div>
                            <span>Description:</span>
                            {p.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
