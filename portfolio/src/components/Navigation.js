//@flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import LinkMenuItem from './LinkMenuItem';
import MenuIcon from '@material-ui/icons/Menu';

type State = {
    isNavOpen: boolean,
    anchorElement: string | any,
}

type Props = {
    classes?: any,
    history: Array<any>,
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
        //this.props.history.push(page);
        //this.setState({anchorElement: null, isNavOpen: false});
    }
    render() {
        const {classes} = this.props;
        const {isNavOpen, anchorElement} = this.state;
        return (
            <div className={classes?.root}>
                <AppBar position="static">
                    <Toolbar >
                        <IconButton edge="start"  onClick={this.handleMenu} className={classes?.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorElement} anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted open={isNavOpen} onClose={this.handleClose}>
                        <LinkMenuItem to="/Projects" onClick={this.handleClose}>Projects</LinkMenuItem>
                        <LinkMenuItem to="/Gas" onClick={this.handleClose}>Gas Money</LinkMenuItem>
                        <LinkMenuItem to="/About" onClick={this.handleClose}>About Me</LinkMenuItem>
                        <LinkMenuItem to="/Resume" onClick={this.handleClose}>Resume</LinkMenuItem>
                        <LinkMenuItem to="/" onClick={this.handleClose}>Home</LinkMenuItem>
                        </Menu>
                        <Typography variant="h6" className={classes?.title}>
                            Elijah Kaufman's Website
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);