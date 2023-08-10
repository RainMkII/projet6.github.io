import React from 'react';
import { useParams } from 'react-router-dom';
import { cardlist } from '../../data/logement';
import Slideshow from '../../components/SlideShow';
import '../../styles/LogementStyles.css';

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={`full-${i}`} src={require('../../images/Star-p.png')} alt='Full Star' />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={`empty-${i}`} src={require('../../images/star-v.png')} alt='Empty Star' />);
  }

  return <div className='star-rating'>{stars}</div>;
}

function LogementDetails() {
  const { id } = useParams();
  const logement = cardlist.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement-details'>
      <Slideshow images={logement.pictures} imageClassName='ImgCarousel' />
      <div className='location-information'>
        <div className='loc-Titre-Location-Tag'>
          <h2>{logement.title}</h2>
          <p className='location'>{logement.location}</p>
          <div className='logement-tag'>
            {logement.tags.map((tag) => (
              <span key={tag} className='tag'>{tag}</span>
            ))}
          </div>
        </div>
        <div className='host-info'>
          <div className='host-profile'>
            <img src={logement.host.picture} alt={logement.host.name} />
            <p>{logement.host.name}</p>
            {renderStars(logement.rating)}
          </div>
        </div>
      </div>
      <div className='informationLogement'>
        <details className='description-dropdown'>
          <summary>Description</summary>
          <p>{logement.description}</p>
        </details>
        <details className='equipments-dropdown'>
          <summary>Équipements</summary>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}

export default LogementDetails;
