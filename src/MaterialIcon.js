import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const validSizes = [2, 3, 4, 5]
const validStackSizes = [1, 2]
const validPulls = ['left', 'right']
const validRotations = [90, 180, 270]
const validFlips = ['horizontal', 'vertical']

const MaterialIcon = ({
  type,
  large = false,
  size = 1,
  stackSize = 0,
  fixed = false,
  list = false,
  border = false,
  borderCircle = false,
  pull = '',
  spin = false,
  reverse = false,
  rotate = 0,
  flip = ''
}) => {
  const cx = {
    zmdi: true,
    [`zmdi-${ type }`]: true,
    'zmdi-hc-lg': large,
    'zmdi-hc-fw': fixed,
    'zmdi-hc-li': list,
    'zmdi-hc-border': border,
    'zmdi-hc-border-circle': borderCircle,
    'zmdi-hc-spin': spin,
    'zmdi-hc-spin-reverse': spin && reverse,
    [`pull-${ pull }`]: validPulls.indexOf(pull) > -1,
    [`zmdi-hc-${ size }x`]: !large && validSizes.indexOf(size) > -1,
    [`zmdi-hc-stack-${ size }x`]: !large && validStackSizes.indexOf(stackSize) > -1,
    [`zmdi-hc-rotate-${ rotate }`]: validRotations.indexOf(rotate) > -1,
    [`zmdi-hc-flip-${ flip }`]: validFlips.indexOf(flip) > -1
  }

  return <i className={ classnames(cx) }></i>
}

MaterialIcon.propTypes = {
  type: PropTypes.string.isRequired,
  large: PropTypes.bool,
  size: PropTypes.number,
  stackSize: PropTypes.number,
  fixed: PropTypes.bool,
  list: PropTypes.bool,
  border: PropTypes.bool,
  borderCircle: PropTypes.bool,
  pull: PropTypes.string,
  spin: PropTypes.bool,
  reverse: PropTypes.bool,
  flip: PropTypes.string,
  rotate: PropTypes.number
}

export default MaterialIcon
