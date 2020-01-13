import React from 'react';
import { render } from 'react-dom';
import Map1 from './Map';
import Form from './Form'
import List from './List';
class App extends React.Component {
  state = { markerPosition: { lat: 52.2297, lng: 21.0122 } };
  moveMarker = () => {
    const { lat, lng } = this.state.markerPosition;
    this.setState({
      markerPosition: {
        lat: lat + 0.0001,
        lng: lng + 0.0001,
      }
    });
  };
  render() {
    const { markerPosition } = this.state;
    return (
      <div>
          <h1>SEWIK /Mapa</h1>
          <Map1 markerPosition={markerPosition} />
        <div>Current markerPosition: lat: {markerPosition.lat}, lng: {markerPosition.lng}</div>
        <button
          onClick={this.moveMarker}
        >
          Move marker
        </button>
          {/*<List></List>*/}
          <Form></Form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
