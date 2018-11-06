import React from 'react';
import { shallow } from 'enzyme';
import MaterialIconStack from '.';
import MaterialIcon from '../MaterialIcon';

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
