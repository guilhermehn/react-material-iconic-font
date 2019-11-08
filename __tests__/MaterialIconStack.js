import React from 'react';
import Enzyme, { render } from 'enzyme';
import MaterialIcon, { MaterialIconStack } from '../src';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MaterialIconStack', () => {
	it('should merge classNames', () => {
		expect(
			render(
				<MaterialIconStack className="foo">
					<MaterialIcon type="plus" list />
				</MaterialIconStack>
			).is('.foo')
		).toBe(true);
	});

	it('should forward props', () => {
		expect(
			render(
				<MaterialIconStack data-foo="foo">
					<MaterialIcon type="plus" list />
				</MaterialIconStack>
			).prop('data-foo')
		).toBe('foo');
	});
});
