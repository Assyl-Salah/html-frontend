import React from "react";
import L from "leaflet";
import './Form.css'
const style = {
  width: "40%",
  height: "300px",
  position: "fixed",
 marginLeft:"-18px",


};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [[52.2297, 21.0122]]
    };
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }
  componentDidMount() {
    // create map
    this.map = L.map("Map", {
      center: [52.2297, 21.0122],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add marker
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }
  componentDidUpdate({ markerPosition }) {
    // check if position has changed
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  }
  render() {
    return <div id="Map" style={style} />;
  }
}

export default Map;
