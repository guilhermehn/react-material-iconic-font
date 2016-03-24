import React, { PropTypes } from 'react'
import classnames from 'classnames'

const MaterialIconStack = ({ children, large }) => {
  let cx = {
    'zmdi-hc-stack': true,
    'zmdi-hc-lg': large
  }

  return (
    <span className={ classnames(cx) }>
      { children }
    </span>
  )
}

MaterialIconStack.propTypes = {
  children: PropTypes.any.isRequired,
  large: PropTypes.bool
}

export default MaterialIconStack
