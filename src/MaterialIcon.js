import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ListContext } from './MaterialIconList';

const SIZES = [2, 3, 4, 5];
const STACK_SIZES = [1, 2];
const PULLS = ['left', 'right'];
const ROTATIONS = [90, 180, 270];
const FLIPS = ['horizontal', 'vertical'];

const extractProps = ({
	large = false,
	size = 1,
	stackSize = 0,
	fixed = false,
	border = false,
	pull = '',
	spin = false,
	rotate = 0,
	flip = '',
	inverse = false,
	...rest
}) => [
	list => ({
		'zmdi-hc-lg': large,
		'zmdi-hc-fw': fixed,
		'zmdi-hc-li': list,
		'zmdi-hc-border': border && border !== 'circle',
		'zmdi-hc-border-circle': border === 'circle',
		'zmdi-hc-spin': spin,
		'zmdi-hc-spin-reverse': spin === 'reverse',
		[`pull-${pull}`]: PULLS.indexOf(pull) > -1,
		[`zmdi-hc-${size}x`]: !large && SIZES.indexOf(size) > -1,
		[`zmdi-hc-stack-${stackSize}x`]:
			!large && STACK_SIZES.indexOf(stackSize) > -1,
		[`zmdi-hc-rotate-${rotate}`]: ROTATIONS.indexOf(rotate) > -1,
		[`zmdi-hc-flip-${flip}`]: FLIPS.indexOf(flip) > -1,
		[`zmdi-hc-inverse`]: inverse
	}),
	rest
];

const MaterialIcon = ({ type, className, ...props }) => {
	const [classProps, restProps] = extractProps(props);

	return (
		<ListContext.Consumer>
			{isInsideList => (
				<i
					className={classnames(
						'zmdi',
						`zmdi-${type}`,
						classProps(isInsideList),
						className
					)}
					{...restProps}
				/>
			)}
		</ListContext.Consumer>
	);
};

MaterialIcon.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	large: PropTypes.bool,
	size: PropTypes.oneOf(SIZES),
	stackSize: PropTypes.oneOf(STACK_SIZES),
	fixed: PropTypes.bool,
	list: PropTypes.bool,
	border: PropTypes.oneOf([true, false, 'circle']),
	pull: PropTypes.oneOf(PULLS),
	spin: PropTypes.oneOf([true, false, 'reverse']),
	flip: PropTypes.oneOf(FLIPS),
	rotate: PropTypes.oneOf(ROTATIONS),
	inverse: PropTypes.bool
};

export default MaterialIcon;
