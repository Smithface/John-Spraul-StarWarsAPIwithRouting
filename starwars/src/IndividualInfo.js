import React from 'react';
import './IndividualInfo.css'
import CharacterSheet from './CharacterSheet';

function IndividualInfo(props) {
  return (
    <div className="parentBox">
      <div className="limitSheetSize">
        <CharacterSheet index={Number(props.match.params.id - 1)} />
      </div>
      <button className="bigButton" onClick={ () => {props.history.push("/")} }>Back to the Main Page</button>
    </div>
  );
}

export default IndividualInfo;
