//@flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

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
            <Typography>About Me</Typography>
        );
    }
}
