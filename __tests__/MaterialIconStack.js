import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import MaterialIcon, { MaterialIconStack } from '../src';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MaterialIconStack tests', () => {
	it('should be a <span> tag with `zmdi-hc-stack` className', () => {
		expect(
			shallow(
				<MaterialIconStack>
					<MaterialIcon type="plus" />
				</MaterialIconStack>
			).is('span.zmdi-hc-stack')
		).toBe(true);
	});

	it('should add the class `zmdi-hc-lg` if the `large` property is present', () => {
		expect(
			shallow(
				<MaterialIconStack large>
					<MaterialIcon type="plus" />
				</MaterialIconStack>
			).is('.zmdi-hc-lg')
		).toBe(true);
	});
});
