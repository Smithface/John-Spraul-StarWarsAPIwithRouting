import React from 'react';
import axios from 'axios';
import './BlankSlate.css';

class BlankSlate extends React.Component {

  state = {
    entity: null,
    category: null,
    number: null,
  };
  
  componentDidMount() {
    const category = this.props.match.params.category
    const number = this.props.match.params.number
    axios
      .get(`https://swapi.co/api/${category}/${number}/`)
      .then(response => this.setState(() => ({ entity: response, number: number, category: category}) ))
      .catch(error => {console.error(error)});
  }

  render() {
    if(!this.state.entity) {
      return <div>Loading information...</div>
    }

    return(
      <div className="blankSlate">
        <div className="blankSlate__topRow">        {/* top row */}
          <div>{this.state.category}</div>
          <div>{this.state.number}</div>
        </div>
        <div className="blankSlate__middleRow">        {/* middle row */}
          {/* <img src={pictures[this.state.myID].picture} alt={name} /> */}
          {Object.keys(this.state.entity.data).map((elem, i) =>{
            return (<div key={`${this.state.category + this.state.number + i}`}><b>{elem}:</b> {this.state.entity.data[elem]}</div>);
          })}
        </div>
      </div>
    );
  }
}

export default BlankSlate;
