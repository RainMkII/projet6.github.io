import React from 'react';
import { useParams } from 'react-router-dom';
import { cardlist } from '../../data/logement';
import Slideshow from '../../components/SlideShow';

function LogementDetails() {
  const { id } = useParams();
  const logement = cardlist.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement-details'>
      <h2>{logement.title}</h2>
      <Slideshow images={logement.pictures} imageClassName='ImgCarousel' />
      <p>{logement.description}</p>
      {/* Affichez d'autres informations sur le logement ici */}
    </div>
  );
}

export default LogementDetails;