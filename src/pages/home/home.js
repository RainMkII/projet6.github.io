import React from 'react';
import imgFond from '../../images/img-fond.png';
import '../../styles/HeroSection.css';
import Card from '../../components/card';
import { cardlist } from '../../data/logement';



function Home() {
  return (
    <div className='home'>
      
      <div className='hero-section'>
        <img 
          src={imgFond}
          alt='Paysage de montagnes enneigées'
          className='hero-image'
        />
       
        <p className='hero-text'>Chez vous, partout et ailleurs</p>
      </div>
      <div className='conteneur'>
      <div className='card-grid'>
        {cardlist.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home;