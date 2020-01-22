//@flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

type State = {
}

type Props = {
}

export default class Landing extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        //const {classes} = this.props;
        //const {isNavOpen, anchorElement} = this.state;
        return (
            <Typography>Welcome to the landing page</Typography>
        );
    }
}
