import expect from 'expect.js';
import React, {PropTypes} from 'react';
import {mount, shallow} from 'enzyme';

import Home from '../src/pages/home';

describe('Tabs', () => {
    let instance;
    it('is shallow rendered without error', () => {
        instance = shallow(<Home/>);
        expect(instance.exists())
            .to
            .be(true);
    });
});