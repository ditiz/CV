import React from "react";
import "./index.scss";
import MovingCard from "../animations/MovingCard";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h2>À propos</h2>
        <MovingCard>
          <div className="box box-blue presentation">
            <p>
              <strong>Bonjour, je suis Mathieu Smarzyk,</strong>
            </p>

            <p>
              Développeur web, je suis passionné par mon travail et désireux de
              développer mes compétences. J'ai eu le plaisir de pouvoir
              travailler chez Spartoo.com où j'ai pu apprendre énormément de
              choses dans le domaine du webmarketing.
            </p>
            <p>
              Après avoir atteint les objectifs que je m'étais fixés j'ai voulu
              découvrir un autre secteur d'activité avec de nouveaux challenges
              j'ai donc intégré la société Nexus/Optim.
            </p>

            <p>
              En parallèle, après l'obtention de mon diplôme j'ai continué mon
              apprentissage en travaillant sur des projets personnels sur mon
              temps libre afin d'approfondir mes connaissances dans différents
              langages et apprendre de nouvelles technologies.
            </p>
            <p>
              Lors de mes expériences et de ma formation, j'ai pu développer des
              compétences qui me permettent d'accomplir des projets aussi bien
              de façon autonome que de façon collective au sein d'une équipe où
              la cohésion et un élément essentiel.
            </p>
            <p>
              Mon objectif est de pouvoir intégrer une entreprise qui me
              permettra d'apporter ma motivation, ma passion professionnelle et
              mon sérieux. Je recherche un secteur d'activité me permettant
              d'acquérir de nouvelles compétences et de progresser dans divers
              domaines.
            </p>
          </div>
        </MovingCard>
      </div>
    );
  }
}

export default Home;
