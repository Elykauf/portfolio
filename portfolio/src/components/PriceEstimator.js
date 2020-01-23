//@flow

import React from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";

//{`Miles: ${(directions.routes['0'].legs[0].distance.value / 1000 * 0.621371).toFixed(2)}`}
//{`Time: ${(directions.routes['0'].legs[0].duration.value / 60).toFixed(2)}`}

type State = {
  response: any
};
type Props = {
  to: string,
  from: string,
  lat: number,
  long: number,
  showMap: boolean,
  AfterDirectionFetch: (cost: number) => void
};

class PriceEstimator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      response: null
    };
  }
  calculateCost = () => {
    const directions = this.state.response;
    let cost = 0;
    if (directions) {
    const miles = (directions.routes['0'].legs[0].distance.value / 1000 * 0.621371).toFixed(2)
    const time = (directions.routes['0'].legs[0].duration.value / 60).toFixed(2)
    cost = (0.35 * parseInt(miles) + 0.3 * parseInt(time) + 5.00);
    }
    return cost.toFixed(2);
  }
  directionsCallback = (newResponse: any) => {
    let cost = 0;
    if (newResponse !== null) {
      if (newResponse.status === "OK") {
        this.setState({ response: newResponse }, () => cost = this.calculateCost());
      } else {
        console.log("response: ", newResponse);
      }
    }
    
    this.props.AfterDirectionFetch(cost);
  };
  render() {
    const { from, to, showMap } = this.props;
    const directions = this.state.response;

    let cost;
    if (directions) {
    }
    return (
      <>
        {directions && (
          <>
            <p>{`Miles: ${directions.routes["0"].legs[0].distance.text}`}</p>
            <p>{`Time: ${directions.routes["0"].legs[0].duration.text}`}</p>
          </>
        )}
          <GoogleMap
            id="ElyGasMoney"
            center={{
              lat: this.props.lat,
              lng: this.props.long,
            }}
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "400px" }}
          >
            {from !== "" && to !== "" && showMap && (
              <DirectionsService
                options={{
                  destination: to,
                  origin: from,
                  travelMode: "DRIVING"
                }}
                callback={this.directionsCallback}
              />
            )}
            {directions !== null && (
              <DirectionsRenderer
                options={{
                  directions: directions
                }}
              />
            )}
          </GoogleMap>
      </>
    );
  }
}

export default PriceEstimator;
