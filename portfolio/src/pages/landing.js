//@flow

import React from "react";
import {
  Typography,
  Button,
  Grid,
  Container,
  Paper,
  Box
} from "@material-ui/core";

type State = {};

type Props = {};

export default class Landing extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    //const {classes} = this.props;
    //const {isNavOpen, anchorElement} = this.state;
    return (
      <>
        <Container maxWidth={"sm"}>
          <Paper>
            <Box
              display="flex"
              height={80}
              alignItems="center"
              justifyContent="center"
            >
              <Typography>Welcome to the landing page</Typography>
            </Box>
            <Box
              display="flex"
              height={80}
              alignItems="center"
              justifyContent="center"
            >
              <Button variant="contained" href={"/Gas"} color="primary">
                Gas Money
              </Button>
            </Box>
          </Paper>
        </Container>
      </>
    );
  }
}
