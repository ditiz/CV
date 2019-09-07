import React from "react";
import "./index.scss";

const projects = [
    {
        name: "traduction-musik",
        description: `Site aider l'utilisateur a traduit des paroles par musiques.`,
        link: "https://traduction-musik.projets.mathieu.smarzyk.com/",
        github: "https://github.com/ditiz/trad-musik",
        img: "./img/projects/trad-musik.png"
    },
    {
        name: "dev-log",
        description: `Site permettant de gérer ses snippets de code.`,
        link: "https://dev-log.projets.mathieu.smarzyk.com/",
        github: "https://github.com/ditiz/dev-log",
        img: "./img/projects/dev-log.png"
    }
];

const githubLink = "https://github.com/ditiz";

const Projects = () => {
    return (
        <div className="projects">
            <div className="github">
                <div className="img">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./img/projects/github.png" alt="github_img" />
                    </a>
                </div>
                <div className="infos">
                    <div className="presentation">Lien vers mon Github</div>
                    <div className="detail">
                        <span>Lien:</span>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {githubLink}
                        </a>
                    </div>
                </div>
            </div>

            {projects.map(p => (
                <div className="project" key={p.name}>
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
                        {p.link && (
                            <div className="project-link">
                                <span>Lien:</span>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {p.link}
                                </a>
                            </div>
                        )}
                        {p.github && (
                            <div className="project-link">
                                <span>Github</span>
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {p.github}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
