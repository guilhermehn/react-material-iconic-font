import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ListContext = React.createContext(false);

const MaterialIconList = ({ className, children, ...props }) => (
	<ul className={classnames('zmdi-hc-ul', className)} {...props}>
		<ListContext.Provider value={true}>{children}</ListContext.Provider>
	</ul>
);

MaterialIconList.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default MaterialIconList;
