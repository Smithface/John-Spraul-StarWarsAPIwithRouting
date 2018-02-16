import React from 'react';
import axios from 'axios';
import './BlankSlate.css';

const DishOutData = (props) => {
  for (let i in props.data) {
    return (
      <div><b>{i}:</b> {props.data[i]}</div>
    );
  }
}

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
      <div className="container">
        <div className="container__topRow">        {/* top row */}
          <div>{this.state.category}</div>
          <div>{this.state.number}</div>
        </div>
        <div className="container__middleRow">        {/* middle row */}
          {/* <img src={pictures[this.state.myID].picture} alt={name} /> */}
          <div className="container__middleRow-right">          {/* center start */}
            <DishOutData data={this.state.entity.data} />
          </div>          {/* center end */}
        </div>
      </div>
    );
  }
}

export default BlankSlate;
