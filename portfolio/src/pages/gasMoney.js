//@flow

import React from "react";
import PriceEstimator from "../components/PriceEstimator";
import {
  Typography,
  IconButton,
  Button,
  Input,
  Paper,
  Container,
  Grid,
  Card,
  Box,
} from "@material-ui/core";
import GoogleMapsAutoComplete from "../components/GoogleMapsAutoComplete";
import MyLocationIcon from "@material-ui/icons/MyLocation";

type State = {
  from: string,
  fromLoc: any | null,
  to: string,
  toLoc: any | null,
  destination: string,
  origin: string,
  cost: number,
  lat: number,
  long: number,
  showMap: boolean
};

type Props = {
  autocompleteService: any
};

const inputFrom = React.createRef();
const inputTo = React.createRef();

class GasMoney extends React.Component<Props, State> {
  autocompleteService = { current: null };
  
  constructor(props: Props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      fromLoc: null,
      toLoc: null,
      destination: "",
      origin: "",
      cost: 0,
      lat: 0,
      long: 0,
      showMap: false
    };
  }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      });
    }
  };
  updateMap = () => {
    const { from, to, fromLoc, toLoc } = this.state;
    const org = fromLoc ? fromLoc : from;
    const dest = toLoc ? toLoc : to;
    console.log(org, dest);

    this.setState({
        origin: org, destination: dest,showMap: true,
    });
  };
  afterDirections = (cost: number) => {
    this.setState({ origin: "", destination: "", cost });
  };
  setFrom = (newVal: any) => {
    this.setState({ from: newVal });
  };
  setFromCoords = (place: string) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const requestUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&fields=name,geometry&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc`;

    fetch(proxyurl + requestUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ fromLoc: data.result.geometry.location });
      })
      .catch(error => {
        return error;
      });
  };
  setTo = (newVal: any) => {
    this.setState({ to: newVal });
  };
  setToCoords = (place: string) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const requestUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&fields=name,geometry&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc`;

    fetch(proxyurl + requestUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
          if (data && data.result && data.result.geometry && data.result.geometry.location ){
        this.setState({ toLoc: data.result.geometry.location });
        }
      })
      .catch(error => {
        return error;
      });
  };
  componentDidMount = () => {
    this.getLocation();
    if (typeof window !== "undefined") {
      if (!document.querySelector("#google-maps")) {
        if (!this.autocompleteService.current && window.google) {
          this.autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!this.autocompleteService.current) {
          console.log("auto complete null");
        }
      }
    }
  };
  handleSubmit = (event: any | null) => {
      if (event !== undefined) {
    console.log("An essay was submitted:", event);
    event.preventDefault();
      }
  };
  render() {
    //const {classes} = this.props;
    const { from, to, origin, destination, cost, lat, long } = this.state;


    const selectedFrom = this.state.fromLoc;
    console.log("Selected", origin);
    const selectedTo = this.state.toLoc;
    console.log("Selected", destination);
    

    return (
      <>
      <Container maxWidth={"md"} stlye={{textAlign: "center"}}>
      <Container maxWidth={"sm"}>
      <Grid>
        <Box
              display="flex"
              height={60}
              alignItems="center"
              justifyContent="center"
            >
          <Typography>Gas Money</Typography>
          </Box>
          <Card>
          <br />
        <form>
            <Container>
            <Box
              display="flex"
              height={80}
              alignItems="center"
              justifyContent="center"
            >
            <GoogleMapsAutoComplete
              onOptionSelect={this.setFromCoords}
              label={"From"}
            />
            </Box>
            <br />
            <Box
              display="flex"
              height={80}
              alignItems="center"
              justifyContent="center"
            >
            <GoogleMapsAutoComplete
              onOptionSelect={this.setToCoords}
              label={"To"}
            />
            </Box>
            </Container>
            <br />
            <Box
              display="flex"
              height={80}
              alignItems="center"
              justifyContent="center"
            >
            <Button size="m" variant="contained" color="primary" onClick={() => (this.updateMap())}>Calculate Price</Button>
            </Box>
          </form>
          <br />
          </Card>
          <br />
          <Container maxWidth={"sm"}>
          <Paper>
          <Box display="flex" height="80" alignItems="center" justifyContent="center">
          {(cost !== 0) && <Typography>{`cost: ${cost}`}</Typography>}
          </Box>
            <PriceEstimator
              from={origin}
              to={destination}
              lat={lat}
              long={long}
              showMap
              AfterDirectionFetch={this.afterDirections}
            />
          <br />
          </Paper>
          </Container>
          </Grid>
          </Container>
        </Container>
      </>
    );
  }
}

export default GasMoney;
