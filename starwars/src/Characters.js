import React, { Component } from 'react';
import './Characters.css';
import CharacterSheet from './CharacterSheet';
import { Link } from 'react-router-dom'

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
        <div className="mainBody">
          {this.state.starwarsChars.map((character, i) => {
            return (
              <Link className="link" to={`/character/${i+1}`} key={i+'a'}>
                <CharacterSheet charInfo={character} index={i} />
              </Link>
            );
          })}
        </div>
    );
  }
}

export default Characters;
