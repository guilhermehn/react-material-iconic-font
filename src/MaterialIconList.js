import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MaterialIconList = ({ className, ...props }) => (
	<ul className={classnames('zmdi-hc-ul', className)} {...props} />
);

MaterialIconList.propTypes = {
	className: PropTypes.string
};

export default MaterialIconList;
