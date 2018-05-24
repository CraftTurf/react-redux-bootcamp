import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import Button from './Button';

enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <Button />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('onClick', () => {
    let wrapper;
    let onClick;

    beforeEach(() => {
      onClick = jest.fn();
      wrapper = shallow(<Button onClick={onClick} />);
    });

    it('should have an onClick property', () => {
      expect(wrapper.props().onClick).toBeDefined();
    });

    it('should react to a click', () => {
      wrapper.simulate('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
