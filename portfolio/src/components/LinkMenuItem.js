import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import MenuItem from '@material-ui/core/MenuItem';

const LinkMenuItem = (props) => {
    const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
      <MenuItem {...rest} onClick={(event) => {
      onClick && onClick(event)
      history.push(to)
  }} />
  )
}

LinkMenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(LinkMenuItem)