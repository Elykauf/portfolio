//@flow

import React from 'react';
import PriceEstimator from '../components/PriceEstimator'
import { Typography, IconButton, Button, Input, Paper } from '@material-ui/core';
import GoogleMapsAutoComplete from '../components/GoogleMapsAutoComplete'
import MyLocationIcon from '@material-ui/icons/MyLocation';

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
    showMap: boolean,
}

type Props = {
    autocompleteService: any,
}

class GasMoney extends React.Component<Props, State> {

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
            showMap: false,
        };
        this.autocompleteService = {current: null};
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude})
            });
        }
    }
    calculatePrice = () => {

    }
    updateMap = () => {
        const {from, to, fromLoc, toLoc} = this.state;
        this.setState({origin: fromLoc ? `${fromLoc.latitude},${fromLoc.longitude}` : from, destination: toLoc ? `${toLoc.latitude},${toLoc.longitude}` : to});
    }
    afterDirections = () => {
        this.setState({origin: "", destination: ""})
    }
    setFrom = (newVal: any) => {
        this.setState({from: newVal});
    }
    setFromCoords = (place: string) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const requestUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${
        place
        }&fields=name,geometry&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc`;

        fetch(proxyurl + requestUrl).then((response) => {
        return response.json()
        }).then((data) => {
        this.setState({fromLoc: data.reslult.geometry.location})
        }).catch((error) => {
        return error;
        });
    }
    setTo = (newVal: any) => {
        this.setState({to: newVal});
    }
    setToCoords = (place: string) => {
        console.log("Setting To Coords")
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const requestUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${
        place
        }&fields=name,geometry&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc`;

        fetch(proxyurl + requestUrl).then((response) => {
        return response.json()
        }).then((data) => {
        this.setState({toLoc: data.reslult.geometry.location})
        }).catch((error) => {
        return error;
        });
    }
    componentDidMount = () => {
        this.getLocation();
        if (typeof window !== 'undefined') {
            if (!document.querySelector('#google-maps')) {
            
        console.log("window.google", !!window.google)
        if (!this.autocompleteService.current && window.google) {
         this.autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!this.autocompleteService.current) {
            console.log("auto complete null")
        }
    }

  }
    }
    render() {
        //const {classes} = this.props;
        const {from, to,origin, destination, cost, lat, long} = this.state;
        
        return (
            <>
            
            <Paper>
            <Typography>Gas Money</Typography>
            <form>
                <GoogleMapsAutoComplete autoCompleteService={this.autocompleteService} onOptionSelect={this.setFromCoords} label={"From"} lat={lat} long={long}/>
                <IconButton><MyLocationIcon/></IconButton>
                
                <br />
                <GoogleMapsAutoComplete onOptionSelect={this.setToCoords} label={"To"} lat={lat} long={long}/>
                
                <br />
                <Button onClick={() => this.updateMap()}>Calculate Price</Button>
            </form>
            <p>{`cost: ${cost}`}</p>
            <div id="mapSomething" style={{height: "800px"}}>
            <PriceEstimator from={origin} to={destination} AfterDirectionFetch={this.afterDirections}/>
            </div>
            </Paper>
            </>
        );
    }
}

export default GasMoney;
