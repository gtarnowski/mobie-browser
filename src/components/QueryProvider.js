import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import ErrorField from './ErrorField';

class QueryProvider extends Component {
  constructor(props) {
    super(props);
    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL;

    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getDataFromApi(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps;
    const { query: currentQuery } = this.props;
    if (query !== currentQuery) this.getDataFromApi(nextProps);
  }

  async getDataFromApi(props) {
    if (!props) return false;
    const { query = ' ' } = props;
    this.setState({ loading: true });

    try {
      const response = await fetch(`${this.apiUrl}/?apikey=${this.apiKey}&${query}`);

      if (!response.ok) throw Error(response.statusText);

      const data = await response.json();
      this.setState({ data, loading: false });
      return data;
    } catch (error) {
      this.setState({ error: error.toString(), loading: false });
      return error;
    }
  }

  render() {
    const { children } = this.props;
    const { loading, error, data } = this.state;
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { data });
      }
      return child;
    });

    if (loading) return <Loader />;
    if (error) return <ErrorField error={error} />;
    return childrenWithProps;
  }
}

QueryProvider.propTypes = {
  query: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default QueryProvider;
