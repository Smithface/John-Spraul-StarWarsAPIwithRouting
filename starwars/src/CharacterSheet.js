import React from 'react';
import './CharacterSheet.css';
import pictures from './pictures';

class CharacterSheet extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="container__topRow">        {/* top row */}
          <div>Star Wars</div>
          <div>Character License</div>
        </div>
        <div className="container__middleRow">        {/* middle row */}
          <img src={pictures[this.props.index].picture} alt={this.props.charInfo.name} />
          <div className="container__middleRow-right">          {/* center start */}
            <div><b>Name:</b> {this.props.charInfo.name}</div>
            <div><b>YOB:</b> {this.props.charInfo.birth_year}</div>
            <div><b>Gender:</b> {this.props.charInfo.gender}</div>
            <div><b>Eye Color:</b> {this.props.charInfo.eye_color}</div>
            <div><b>Hair Color:</b> {this.props.charInfo.hair_color}</div>
            <div><b>Skin:</b> {this.props.charInfo.skin_color}</div>
            <div><b>Height:</b> {this.props.charInfo.height}</div>
            <div><b>Mass:</b> {this.props.charInfo.mass}</div>
          </div>          {/* center end */}
        </div>
        <div className="container__bottomRow">        {/* bottom row */}
          <div><b>created:</b> {this.props.charInfo.created}</div>
          <div><b>edited:</b> {this.props.charInfo.edited}</div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
