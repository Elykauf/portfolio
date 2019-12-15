//@flow

import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
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
    isNavOpen: boolean,
    anchorElement: string | any,
}

type Props = {
    classes?: typeof undefined,
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class Navigation extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            anchorElement: null,
        };
    }
    handleMenu = (event) => {
        this.setState({anchorElement: event.currentTarget, isNavOpen: true});
    }
    handleClose = () => {
        this.setState({anchorElement: null, isNavOpen: false});
    }
    handleNav = (page) => {
        this.props.history.push(page);
        this.setState({anchorElement: null, isNavOpen: false});
    }
    render() {
        const {classes} = this.props;
        const {isNavOpen, anchorElement} = this.state;
        return (
            <div className={classes?.root}>
                <Router>
                <AppBar position="static">
                    <Toolbar >
                        <IconButton edge="start"  onClick={this.handleMenu} className={classes?.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorElement} anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted open={isNavOpen} onClose={this.handleClose}>
                        <MenuItem onClick={this.handleNav('Projects')}>Projects</MenuItem>
                        <MenuItem onClick={this.handleNav('aboutMe')}>About Me</MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/Resume">Resume</Link></MenuItem>
                        </Menu>
                        <Typography variant="h6" className={classes?.title}>
                            Elijah Kaufman's Website
                        </Typography>
                    </Toolbar>
                </AppBar>
                </Router>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);