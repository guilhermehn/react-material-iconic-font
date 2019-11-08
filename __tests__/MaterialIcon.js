import React from 'react';
import Enzyme, { render } from 'enzyme';
import MaterialIcon from '../src';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MaterialIcon tests', () => {
	it('should be a <i> tag with `zmdi` className', () => {
		expect(render(<MaterialIcon type="plus" />).is('i.zmdi')).toBe(true);
	});

	it('should add classname `zmdi-hc-lg` if the `large` property is present', () => {
		expect(render(<MaterialIcon type="plus" large />).is('.zmdi-hc-lg')).toBe(
			true
		);
	});

	it('should add classname `zmdi-hc-{n}x` if the `size` property is present', () => {
		expect(
			render(<MaterialIcon type="plus" size={2} />).is(`.zmdi-hc-2x`)
		).toBe(true);
	});

	it('should not add classname `zmdi-hc-{n}x` if the `size` property is invalid (1 > n < 6)', () => {
		expect(
			render(<MaterialIcon type="plus" size={6} />).is(`.zmdi-hc-6x`)
		).toBe(false);
	});

	it('should add classname `zmdi-hc-fw` if the `fixed` property is present', () => {
		expect(render(<MaterialIcon type="plus" fixed />).is('.zmdi-hc-fw')).toBe(
			true
		);
	});

	it('should add classname `zmdi-hc-border` if the `border` property is present', () => {
		expect(
			render(<MaterialIcon type="plus" border />).is('.zmdi-hc-border')
		).toBe(true);
	});

	it('should add classname `zmdi-hc-border-circle` if the `border` property is `circle`', () => {
		expect(
			render(<MaterialIcon type="plus" border="circle" />).is(
				'.zmdi-hc-border-circle'
			)
		).toBe(true);
	});

	it('should add classname `zmdi-hc-spin` if the `spin` property is present', () => {
		expect(render(<MaterialIcon type="plus" spin />).is('.zmdi-hc-spin')).toBe(
			true
		);
	});

	it('should add classname `zmdi-hc-spin-reverse` if the `spin` prop is set to `reverse`', () => {
		expect(
			render(<MaterialIcon type="plus" spin="reverse" />).is(
				'.zmdi-hc-spin-reverse'
			)
		).toBe(true);
	});

	it('should add classname `pull-left` if the `pull` property is `left`', () => {
		expect(
			render(<MaterialIcon type="plus" pull="left" />).is('.pull-left')
		).toBe(true);
	});

	it('should add classname `pull-right` if the `pull` property is `right`', () => {
		expect(
			render(<MaterialIcon type="plus" pull="right" />).is('.pull-right')
		).toBe(true);
	});

	it('should add classname `zmdi-hc-flip-horizontal` if the `flip` property is `horizontal`', () => {
		expect(
			render(<MaterialIcon type="plus" flip="horizontal" />).is(
				'.zmdi-hc-flip-horizontal'
			)
		).toBe(true);
	});

	it('should add classname `zmdi-hc-flip-vertical` if the `flip` property is `vertical`', () => {
		expect(
			render(<MaterialIcon type="plus" flip="vertical" />).is(
				'.zmdi-hc-flip-vertical'
			)
		).toBe(true);
	});

	it('should not add classname `zmdi-hc-flip-{axis}` if the `flip` value is other than `horizontal` or `vertical`', () => {
		const icon = <MaterialIcon type="plus" flip="foo" />;

		expect(render(icon).is('.zmdi-hc-flip-horizontal')).toBe(false);
		expect(render(icon).is('.zmdi-hc-flip-vertical')).toBe(false);
	});

	it('should add classname `zmdi-hc-rotate-{degrees}` if the `rotate` property is one of the valid rotation values', () => {
		expect(
			render(<MaterialIcon type="plus" rotate={90} />).is('.zmdi-hc-rotate-90')
		).toBe(true);

		expect(
			render(<MaterialIcon type="plus" rotate={180} />).is(
				'.zmdi-hc-rotate-180'
			)
		).toBe(true);

		expect(
			render(<MaterialIcon type="plus" rotate={270} />).is(
				'.zmdi-hc-rotate-270'
			)
		).toBe(true);
	});

	it('should not add classname `zmdi-hc-rotate-{degrees}` if the `degrees` value is other than `90`, `180` or `270`', () => {
		expect(
			render(<MaterialIcon type="plus" rotate={60} />).is('.zmdi-hc-rotate-60')
		).toBe(false);
	});
});
