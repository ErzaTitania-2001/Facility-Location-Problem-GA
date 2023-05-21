import React from "react";
import "./styles.scss";

export default function Drives() {
  return (
    <div className="wrapper">
      <h1>UPCOMING DRIVES</h1>
      <Card
        img="https://images.unsplash.com/photo-1601198389904-8740006d4b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="All Metal Recycling Drive"
        date="Date: 11/09/2022"
        walletpoints="Wallet Points: 300"
        description="Bring your used metals and plastic materials and help drive change!"
      />

      <Card
        img="https://images.unsplash.com/photo-1624053335018-d267adc7687b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        title="Clean The Earth Campaign"
        date="Date: 25/09/2022"
        walletpoints="Wallet Points: 250"
        description="Help our Earth stay clean! Attend this drive with friends and family to clean up, fix up and conserve our environment, and have some fun while you're at it!"
      />

      <Card
        img="https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        title="Run For Renewal"
        date="Date: 09/10/2022"
        walletpoints="Wallet Points: 400"
        description="Run to raise awareness about sustainability and renewal, and help promote ThreeAre's!"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <h3 className="card__date">{props.date}</h3>
        <h3 className="card__walletpoints">{props.walletpoints}</h3>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Register</button>
    </div>
  );
}

