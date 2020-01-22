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
  AfterDirectionFetch: () => void
};

class PriceEstimator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      response: null
    };
  }
  directionsCallback = (newResponse: any) => {
    console.log(newResponse);

    if (newResponse !== null) {
      if (newResponse.status === "OK") {
        this.setState({ response: newResponse });
      } else {
        console.log("response: ", newResponse);
      }
    }
    this.props.AfterDirectionFetch();
  };
  render() {
    const { from, to } = this.props;
    const directions = this.state.response;

    return (
      <>
        {directions && (
          <>
            <p>{`Miles: ${directions.routes["0"].legs[0].distance.text}`}</p>
            <p>{`Time: ${directions.routes["0"].legs[0].duration.text}`}</p>
          </>
        )}
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc"
          libraries={["places"]}
        >
          <GoogleMap
            id="ElyGasMoney"
            center={{
              lat: -34.397,
              lng: 150.644
            }}
            zoom={8}
            mapContainerStyle={{ width: "100%", height: "400px" }}
          >
            {from !== "" && to !== "" && (
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
        </LoadScript>
      </>
    );
  }
}

export default PriceEstimator;
