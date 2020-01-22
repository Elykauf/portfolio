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

type Props = {
  onOptionSelect: place => void,
  onChange?: newVal => void,
};
type State = {
  inputValue: string,
  lat: number,
  long: number,
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
      lat: 0,
      long: 0,
      options: []
    };

    this.updateOptionsThrottled = throttle(this.updateOptions, 300);
  }

  updateOptions = async () => {
    const { lat, long } = this.props;
    const placeToSearch = this.state.inputValue;
    const currentLocString =
      lat !== 0 && long !== 0 ? `&location=${lat},${long}&radius=25000` : "";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const requestUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURI(
      placeToSearch
    )}${currentLocString}&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc`;

    fetch(proxyurl + requestUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ options: data.predictions });
      })
      .catch(error => {});
  };

  handleChange = event => {
    this.setState(
      { inputValue: event.target.value},
      this.updateOptionsThrottled
    );
  };

  render() {
    const { inputValue, options, selectedPlace } = this.state;

    return (
      <>
        <p>{`${inputValue}`}</p>
        <Autocomplete
          id="google-map-demo"
          style={{ width: 300 }}
          getOptionLabel={option => {
            this.props.onOptionSelect(option.place_id);
            return typeof option === "string" ? option : option.place_id;
          }}
          filterOptions={x => x}
          options={this.state.options}
          autoComplete
          includeInputInList
          freeSolo
          disableOpenOnFocus
          renderInput={params => (
            <TextField
              {...params}
              label={this.props.label || "From"}
              variant="outlined"
              fullWidth
              onChange={event => {
                if (this.props.onChange) {
                  this.props.onChange(event.target.value);
                  this.setState({inputValue: event.target.value})
                } else {
                  this.handleChange(event)
                }
              }}
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
