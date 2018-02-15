import React from 'react';
import axios from 'axios';
import './CharacterSheet.css';
import pictures from './pictures';

class CharacterSheet extends React.Component {

  state = {
    character: null,
    myID: 0
  };
  
  componentDidMount() {
    let id = null;
    if(this.props.index === undefined) {
      id = this.props.match.params.id
    } else { id = this.props.index + 1 }
    axios
      .get(`https://swapi.co/api/people/${id}/`)
      .then(response => this.setState(() => ({ character: response, myID: id-1}) ))
      .catch(error => {console.error(error)});
  }

  render() {
    if(!this.state.character) {
      return <div>Loading character information...</div>
    }

    const { name, birth_year, gender, eye_color, hair_color, skin_color, height, mass, created, edited } = this.state.character.data;
    return(
      <div className="container">
        <div className="container__topRow">        {/* top row */}
          <div>Star Wars</div>
          <div>Character License</div>
        </div>
        <div className="container__middleRow">        {/* middle row */}
          <img src={pictures[this.state.myID].picture} alt={name} />
          <div className="container__middleRow-right">          {/* center start */}
            <div><b>Name:</b> {name}</div>
            <div><b>YOB:</b> {birth_year}</div>
            <div><b>Gender:</b> {gender}</div>
            <div><b>Eye Color:</b> {eye_color}</div>
            <div><b>Hair Color:</b> {hair_color}</div>
            <div><b>Skin:</b> {skin_color}</div>
            <div><b>Height:</b> {height}</div>
            <div><b>Mass:</b> {mass}</div>
          </div>          {/* center end */}
        </div>
        <div className="container__bottomRow">        {/* bottom row */}
          <div><b>created:</b> {created}</div>
          <div><b>edited:</b> {edited}</div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
