import React from 'react';

import "./styles/Home.css"

const Home = () => {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1 className="landing-title">Theracode</h1>
        <p className="landing-description">Helping you heal since September 2023</p>
        <a href="/signup" className="cta-button">Get Started</a>
      </header>
    </div>
  );
};

export default Home;