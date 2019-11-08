import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MaterialIconStack = ({ large, className, ...props }) => (
	<span
		className={classnames('zmdi-hc-stack', { 'zmdi-hc-lg': large }, className)}
		{...props}
	/>
);

MaterialIconStack.propTypes = {
	className: PropTypes.string,
	large: PropTypes.bool
};

export default MaterialIconStack;
