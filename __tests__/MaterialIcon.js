import React from 'react';
import Enzyme, { mount } from 'enzyme';
import MaterialIcon from '../src';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MaterialIcon tests', () => {
	it('should be a <i> tag with `zmdi` className', () => {
		expect(mount(<MaterialIcon type="plus" />).find('i.zmdi')).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-lg` if the `large` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" large />).find('.zmdi-hc-lg')
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-{n}x` if the `size` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" size={2} />).find(`.zmdi-hc-2x`)
		).toHaveLength(1);
	});

	it('should not add classname `zmdi-hc-{n}x` if the `size` property is invalid (1 > n < 6)', () => {
		expect(
			mount(<MaterialIcon type="plus" size={6} />).find(`.zmdi-hc-6x`)
		).toHaveLength(0);
	});

	it('should add classname `zmdi-hc-fw` if the `fixed` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" fixed />).find('.zmdi-hc-fw')
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-li` if the `list` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" list />).find('.zmdi-hc-li')
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-border` if the `border` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" border />).find('.zmdi-hc-border')
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-border-circle` if the `borderCircle` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" borderCircle />).find(
				'.zmdi-hc-border-circle'
			)
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-spin` if the `spin` property is present', () => {
		expect(
			mount(<MaterialIcon type="plus" spin />).find('.zmdi-hc-spin')
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-spin-reverse` if the `spin` and `reverse` properties are present', () => {
		expect(
			mount(<MaterialIcon type="plus" spin reverse />).find(
				'.zmdi-hc-spin-reverse'
			)
		).toHaveLength(1);
	});

	it('should add classname `pull-left` if the `pull` property is `left`', () => {
		expect(
			mount(<MaterialIcon type="plus" pull="left" />).find('.pull-left')
		).toHaveLength(1);
	});

	it('should add classname `pull-right` if the `pull` property is `right`', () => {
		expect(
			mount(<MaterialIcon type="plus" pull="right" />).find('.pull-right')
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-flip-horizontal` if the `flip` property is `horizontal`', () => {
		expect(
			mount(<MaterialIcon type="plus" flip="horizontal" />).find(
				'.zmdi-hc-flip-horizontal'
			)
		).toHaveLength(1);
	});

	it('should add classname `zmdi-hc-flip-vertical` if the `flip` property is `vertical`', () => {
		expect(
			mount(<MaterialIcon type="plus" flip="vertical" />).find(
				'.zmdi-hc-flip-vertical'
			)
		).toHaveLength(1);
	});

	it('should not add classname `zmdi-hc-flip-{axis}` if the `flip` value is other than `horizontal` or `vertical`', () => {
		const icon = <MaterialIcon type="plus" flip="foo" />;

		expect(mount(icon).find('.zmdi-hc-flip-horizontal')).toHaveLength(0);
		expect(mount(icon).find('.zmdi-hc-flip-vertical')).toHaveLength(0);
	});

	it('should add classname `zmdi-hc-rotate-{degrees}` if the `rotate` property is one of the valid rotation values', () => {
		expect(
			mount(<MaterialIcon type="plus" rotate={90} />).find('.zmdi-hc-rotate-90')
		).toHaveLength(1);

		expect(
			mount(<MaterialIcon type="plus" rotate={180} />).find(
				'.zmdi-hc-rotate-180'
			)
		).toHaveLength(1);

		expect(
			mount(<MaterialIcon type="plus" rotate={270} />).find(
				'.zmdi-hc-rotate-270'
			)
		).toHaveLength(1);
	});

	it('should not add classname `zmdi-hc-rotate-{degrees}` if the `degrees` value is other than `90`, `180` or `270`', () => {
		const icon = <MaterialIcon type="plus" rotate={60} />;

		expect(mount(icon).is('.zmdi-hc-rotate-60')).toBe(false);
	});
});
