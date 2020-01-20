import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import Form from "./Form";
import Background from './image.png';
const style = {
    width:"100%",
    height:"100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
   backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop:"0px"
};
class App extends React.Component {
  state = {
    markersData: [
      { latLng: { lat: 52.2297, lng: 21.0122} }
    ]
  };
  addMarker = () => {
    const { markersData } = this.state;
    const lastMarker = markersData[markersData.length - 1];

    this.setState({
      markersData: [
        ...markersData,
        {
          latLng: {
            lat: lastMarker.latLng.lat - 0.01,
            lng: lastMarker.latLng.lng - 0.001,
          }
        }
      ]
    });
  };
  render() {
    const { markersData } = this.state;
    return (
      <div style={style} >
        <h1>SEWIK/Mapa</h1>
        <Map markersData={markersData} />
        <button
          onClick={this.addMarker}
        >
         submit
        </button>

        <Form></Form>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
