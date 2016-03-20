import React, { PropTypes } from 'react'
import classnames from 'classnames'

const validPulls = ['left', 'right']
const validRotations = [90, 180, 270]
const validFlips = ['horizontal', 'vertical']

const MaterialIcon = ({
  type,
  large = false,
  size = 1,
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
    'zmdi-hc-lg': large,
    'zmdi-hc-fw': fixed,
    'zmdi-hc-li': list,
    'zmdi-hc-border': border,
    'zmdi-hc-border-circle': borderCircle,
    'zmdi-hc-spin': spin,
    'zmdi-hc-spin-reverse': spin && reverse
  }

  cx[`zmdi-${ type }`] = true

  if (validPulls.indexOf(pull) > -1) {
    cx[`pull-${ pull }`] = true
  }

  if (!large && size > 1 && size < 6) {
    cx[`zmdi-hc-${ size }x`] = true
  }

  if (validRotations.indexOf(rotate) > -1) {
    cx[`zmdi-hc-rotate-${ rotate }`] = true
  }

  if (validFlips.indexOf(flip) > -1) {
    cx[`zmdi-hc-flip-${ flip }`] = true
  }

  return <i className={ classnames(cx) }></i>
}

MaterialIcon.propTypes = {
  type: PropTypes.string.isRequired,
  large: PropTypes.bool,
  size: PropTypes.number,
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
