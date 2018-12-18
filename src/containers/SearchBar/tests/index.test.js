import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapDispatchToProps } from '../index';
import { searchBarSubmitQuery, searchBarFilter, searchBarValue } from '../actions';

describe('<SearchBar />', () => {
  describe('Render', () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const onCheck = jest.fn();

    const defaultProps = {
      onChange,
      onSubmit,
      onCheck,
      searchValue: 'test',
      filter: 'all',
    };
    const createComponent = props => shallow(<SearchBar {...defaultProps} {...props} />);

    it('should render correctly', () => {
      const component = createComponent();
      expect(component).toMatchSnapshot();
    });

    it('should render correctly with inputs', () => {
      const component = createComponent();
      const inputs = component.find('input');

      expect(inputs).toHaveLength(3);
    });

    it('should render correctly with labels', () => {
      const component = createComponent();
      const labels = component.find('label');

      expect(labels).toHaveLength(3);
    });

    it('should render correctly with submit button', () => {
      const component = createComponent();
      const submitButton = component.find('button');

      expect(submitButton).toHaveLength(1);
    });
  });

  describe('Actions', () => {
    describe('mapDispatchToProps', () => {
      const dispatch = jest.fn();
      const props = {
        onChange: jest.fn(),
        onCheck: jest.fn(),
        onSubmit: jest.fn(),
      };

      const dispatchResult = mapDispatchToProps(dispatch, props);

      it('should have a `onChange` attribute ', () => expect(dispatchResult).toHaveProperty('onChange'));
      it('should have a `onCheck` attribute ', () => expect(dispatchResult).toHaveProperty('onCheck'));
      it('should have a `onSubmit` attribute ', () => expect(dispatchResult).toHaveProperty('onSubmit'));

      it('should call `onChange` with "test" value', () => {
        dispatchResult.onChange({ target: { value: 'test' } });
        expect(dispatch).toHaveBeenCalledWith(searchBarValue({ target: { value: 'test' } }));
      });

      it('should call `onCheck` with "all" value', () => {
        dispatchResult.onCheck('all');
        expect(dispatch).toHaveBeenCalledWith(searchBarFilter('all'));
      });

      it('should call `onChange` with "test" value', () => {
        dispatchResult.onSubmit();
        expect(dispatch).toHaveBeenCalledWith(searchBarSubmitQuery());
      });
    });
  });
});
