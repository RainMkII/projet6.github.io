import React from 'react';
import Collapse from '../../components/Collapse';

function About() {
  return (
    <div>
      <h1>À propos</h1>
      <Collapse title="Fiabilité" className="collapse-about">
        <p>test</p>
      </Collapse>

      <Collapse title="Respect" className="collapse-about">
        <p>Test</p>
      </Collapse>

      <Collapse title="Service" className="collapse-about">
        <p>Test</p>
      </Collapse>

      <Collapse title="Sécurité" className="collapse-about">
        <p>Test</p>
      </Collapse>
    </div>
  );
}

export default About;