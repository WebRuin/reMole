/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import MolesComponent from 'components//MolesComponent.js';

describe('MolesComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(MolesComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('moles-component');
  });
});
