import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript
} from "@react-google-maps/api";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

type Props = {};
type State = {
  inputValue: string,
  options: array<any>
};

export default class GoogleMapsAutoComplete extends React.Component<
  Props,
  State
> {
  center = {
    lat: 38.685,
    lng: -115.234
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: "",
      options: []
    };
  }

  updateOptions = async () => {
    const placeToSearch = this.state.inputValue;
    const requestUrl = `https://cors-anywhere.herokuapp.com/maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURI(
      placeToSearch
    )}&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc`;

    const options = {
      headers: new Headers({ "content-type": "application/json" }),
      mode: "no-cors",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };
    let rawData = await fetch(requestUrl, options);
    let data = await rawData.json();

    console.log(data);
    //this.setState({options: data})
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value }, this.updateOptions);
  };

  //googleMapsApiKey="AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc"
  render() {
    const { inputValue, options } = this.state;

    return (
      <>
        <p>{`${inputValue}`}</p>
        <Autocomplete
          id="google-map-demo"
          style={{ width: 300 }}
          getOptionLabel={option =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={x => x}
          options={this.state.options}
          autoComplete
          includeInputInList
          freeSolo
          disableOpenOnFocus
          renderInput={params => (
            <TextField
              {...params}
              label="Add a location"
              variant="outlined"
              fullWidth
              onChange={throttle(this.handleChange, 500)}
            />
          )}
          renderOption={option => {
            const matches =
              option.structured_formatting.main_text_matched_substrings;
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map(match => [match.offset, match.offset + match.length])
            );

            return (
              <Grid container alignItems="center">
                <Grid item>
                  <LocationOnIcon />
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{ fontWeight: part.highlight ? 700 : 400 }}
                    >
                      {part.text}
                    </span>
                  ))}

                  <Typography variant="body2" color="textSecondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            );
          }}
        />
      </>
    );
  }
}
