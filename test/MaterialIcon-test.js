import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MaterialIcon from '..';

describe('MaterialIcon tests', () => {
  it('should be a <i> tag with `zmdi` className', () => {
    expect(shallow(<MaterialIcon type="plus" />).is('i.zmdi')).to.equal(true);
  });

  it('should add the class `zmdi-hc-lg` if the `large` property is present', () => {
    expect(
      shallow(<MaterialIcon type="plus" large />).is('.zmdi-hc-lg')
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-{n}x` if the `size` property is present', () => {
    let size = 2;

    expect(
      shallow(<MaterialIcon type="plus" size={size} />).is(`.zmdi-hc-${size}x`)
    ).to.equal(true);
  });

  it('should not add the class `zmdi-hc-{n}x` if the `size` property is invalid (1 > n < 6)', () => {
    let size = 6;

    expect(
      shallow(<MaterialIcon type="plus" size={size} />).is(`.zmdi-hc-${size}x`)
    ).to.equal(false);
  });

  it('should add the class `zmdi-hc-fw` if the `fixed` property is present', () => {
    expect(
      shallow(<MaterialIcon type="plus" fixed />).is('.zmdi-hc-fw')
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-li` if the `list` property is present', () => {
    expect(
      shallow(<MaterialIcon type="plus" list />).is('.zmdi-hc-li')
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-border` if the `border` property is present', () => {
    expect(
      shallow(<MaterialIcon type="plus" border />).is('.zmdi-hc-border')
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-border-circle` if the `borderCircle` property is present', () => {
    expect(
      shallow(<MaterialIcon type="plus" borderCircle />).is(
        '.zmdi-hc-border-circle'
      )
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-spin` if the `spin` property is present', () => {
    expect(
      shallow(<MaterialIcon type="plus" spin />).is('.zmdi-hc-spin')
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-spin-reverse` if the `spin` and `reverse` properties are present', () => {
    expect(
      shallow(<MaterialIcon type="plus" spin reverse />).is(
        '.zmdi-hc-spin-reverse'
      )
    ).to.equal(true);
  });

  it('should add the class `pull-left` if the `pull` property is `left`', () => {
    expect(
      shallow(<MaterialIcon type="plus" pull="left" />).is('.pull-left')
    ).to.equal(true);
  });

  it('should add the class `pull-right` if the `pull` property is `right`', () => {
    expect(
      shallow(<MaterialIcon type="plus" pull="right" />).is('.pull-right')
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-flip-horizontal` if the `flip` property is `horizontal`', () => {
    expect(
      shallow(<MaterialIcon type="plus" flip="horizontal" />).is(
        '.zmdi-hc-flip-horizontal'
      )
    ).to.equal(true);
  });

  it('should add the class `zmdi-hc-flip-vertical` if the `flip` property is `vertical`', () => {
    expect(
      shallow(<MaterialIcon type="plus" flip="vertical" />).is(
        '.zmdi-hc-flip-vertical'
      )
    ).to.equal(true);
  });

  it('should not add the class `zmdi-hc-flip-{axis}` if the `flip` value is other than `horizontal` or `vertical`', () => {
    let icon = <MaterialIcon type="plus" flip="foo" />;

    expect(shallow(icon).is('.zmdi-hc-flip-horizontal')).to.equal(false);

    expect(shallow(icon).is('.zmdi-hc-flip-vertical')).to.equal(false);
  });

  it('should add the class `zmdi-hc-rotate-{degrees}` if the `rotate` property is one of the valid rotation values', () => {
    expect(
      shallow(<MaterialIcon type="plus" rotate={90} />).is('.zmdi-hc-rotate-90')
    ).to.equal(true);

    expect(
      shallow(<MaterialIcon type="plus" rotate={180} />).is(
        '.zmdi-hc-rotate-180'
      )
    ).to.equal(true);

    expect(
      shallow(<MaterialIcon type="plus" rotate={270} />).is(
        '.zmdi-hc-rotate-270'
      )
    ).to.equal(true);
  });

  it('should not add the class `zmdi-hc-rotate-{degrees}` if the `degrees` value is other than `90`, `180` or `270`', () => {
    let icon = <MaterialIcon type="plus" rotate={60} />;

    expect(shallow(icon).is('.zmdi-hc-rotate-60')).to.equal(false);
  });
});
