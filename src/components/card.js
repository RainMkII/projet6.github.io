import React , { useEffect , useState} from "react";
import { cardlist } from "../data/logement";
import '../styles/Card.css'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function Card({ logement }) {
  return (
    <div className='card'>
      <Link to={`/logement/${logement.id}`} className="card-link">
         <img src={logement.cover} alt={logement.title} className="card-image" />
        <h3 className="card-title">{logement.title}</h3>
      </Link>
    </div>
  );
}


export default Card;