import React from 'react';
import { useParams } from 'react-router-dom';
import { cardlist } from '../../data/logement';
import Slideshow from '../../components/SlideShow';
import Collapse from '../../components/Collapse';
import '../../styles/LogementStyles.css';
import StarRating from '../../components/StarRating';



function LogementDetails() {
  const { id } = useParams();
  const logement = cardlist.find((logement) => logement.id === id);

  if (!logement) {
    return <div className='LogementNotFound'>Logement non trouvé</div>;
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
            <StarRating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className='informationLogement'>
        <Collapse title="Description" className='description-dropdown'>
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements" className='equipments-dropdown'>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default LogementDetails;
