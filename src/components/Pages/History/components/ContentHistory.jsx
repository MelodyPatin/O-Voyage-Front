/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PresentationCard from './PresentationCard';

const ContentHistory = () => {
  return (
    <div className="history">
      <h2>La Dream Team</h2>
      <div className="cards">
        <PresentationCard firstname="Aurélien" />
        <PresentationCard firstname="Mélody" />
        <PresentationCard firstname="Nicolas" />
        <PresentationCard firstname="Théophile" />
      </div>
      <h2>Notre Aventure O'Clock : Voyager Ensemble</h2>
      <div>
        <p>
          Nous sommes une équipe passionnée de quatre développeurs juniors,
          réunis dans le cadre de notre formation chez O'Clock. Animés par notre
          amour du voyage et motivés par l'idée de simplifier l'organisation des
          escapades en groupe, nous avons créé une plateforme collaborative en
          un mois, de la conception à la réalisation.
        </p>
        <p>
          Inspirés par une expérience mémorable du Nouvel An en Hongrie avec nos
          amis, nous avons canalisé notre énergie créative pour développer un
          site web accessible sur desktop et mobile. La plateforme vise à offrir
          une interface conviviale pour la planification de voyages en groupe,
          facilitant la gestion des itinéraires passés, présents et futurs.
        </p>
        <p>
          Chacun de nous a apporté ses compétences en développement web pour
          mettre en place des fonctionnalités innovantes. Au cœur du projet, la
          possibilité pour chaque participant de proposer des activités,
          soumises ensuite au vote des autres voyageurs. Notre système de vote
          permet de construire un itinéraire basé sur les préférences
          collectives, créant ainsi une expérience de voyage unique et
          personnalisée.
        </p>
        <p>
          Pendant ce mois intense chez O'Clock, nous avons intégré des
          fonctionnalités telles qu'une carte interactive, une API météo pour
          optimiser les activités en fonction des conditions climatiques, une
          checklist individuelle, une gestion simplifiée des participants, un
          espace de partage de photos, et un chat intégré pour faciliter la
          communication au sein du groupe.
        </p>
        <p>
          Notre plateforme va au-delà de la simple planification de voyages ;
          elle incarne notre parcours d'apprentissage chez O'Clock et notre
          dévouement à créer des solutions innovantes. Elle symbolise notre
          capacité à collaborer en équipe, à relever des défis techniques et à
          transformer une idée passionnante en une réalité fonctionnelle. Notre
          projet est le résultat d'un mois intensif, mais aussi le début d'une
          aventure qui continuera à évoluer au fil de notre parcours
          professionnel.
        </p>
        <p>
          Voyagez avec nous sur cette plateforme collaborative, où la passion du
          développement web rencontre l'excitation de l'aventure en groupe. 🌍✨
        </p>
      </div>
      <h2>Nous contacter</h2>
      <p>N'hésitez pas à nous contacter :</p>
      <ul>
        <li>Aurélien: </li>
        <li>Mélody: </li>
        <li>Nicolas: </li>
        <li>Théophile: </li>
      </ul>
    </div>
  );
};

export default ContentHistory;
