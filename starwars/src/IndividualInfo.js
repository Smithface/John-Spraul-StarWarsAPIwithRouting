import React from 'react';
import './IndividualInfo.css'
import CharacterSheet from './CharacterSheet';

function IndividualInfo(props) {
  console.log(props);
  return (
    <div className="limitsheetsize">
      <CharacterSheet index={Number(props.match.params.id - 1)} />
    </div>
  );
}

export default IndividualInfo;
