import React from 'react';
import Enzyme, { render } from 'enzyme';
import MaterialIcon, { MaterialIconList } from '../src';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MaterialIconList', () => {
	it('should merge classNames', () => {
		expect(
			render(
				<MaterialIconList className="foo">
					<MaterialIcon type="plus" list />
				</MaterialIconList>
			).is('.foo')
		).toBe(true);
	});

	it('should forward props', () => {
		expect(
			render(
				<MaterialIconList data-foo="foo">
					<MaterialIcon type="plus" list />
				</MaterialIconList>
			).prop('data-foo')
		).toBe('foo');
	});
});
