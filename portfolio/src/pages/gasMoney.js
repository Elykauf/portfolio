//@flow

import React from 'react';
import PriceEstimator from '../components/PriceEstimator'
import { Typography, IconButton, Button, Input, Paper } from '@material-ui/core';
import GoogleMapsAutoComplete from '../components/GoogleMapsAutoComplete'
import MyLocationIcon from '@material-ui/icons/MyLocation';

type State = {
    from: string,
    to: string,
    destination: string,
    origin: string,
    cost: number,
    showMap: boolean,
}

type Props = {
}

class GasMoney extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            from: "",
            to: "",
            destination: "",
            origin: "",
            cost: 0,
            showMap: false,
        };
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
            });
        }
    }
    calculatePrice = () => {

    }
    updateMap = () => {
        const {from, to} = this.state;
        this.setState({origin: from, destination: to});
    }
    afterDirections = () => {
        this.setState({origin: "", destination: ""})
    }

    render() {
        //const {classes} = this.props;
        const {from, to,origin, destination, cost} = this.state;
        
        return (
            <>
            <Paper>
            <Typography>Gas Money</Typography>
            <form>
                <GoogleMapsAutoComplete />
                <IconButton><MyLocationIcon/></IconButton>
                
                <br />
                <Input onChange={(event) => this.setState({to: event.target.value})} placeholder="To" />
                <IconButton><MyLocationIcon/></IconButton>
                
                <br />
                <Button onClick={() => this.updateMap()}>Calculate Price</Button>
            </form>
            <Button onClick={() => this.getLocation()}>Get Location</Button>
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
