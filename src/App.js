import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import SearchList from './components/SearchList/SearchList';
import FoodSection from './containers/FoodDetails/FoodDetails';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <SearchList/>
        <FoodSection/>
      </Layout>
    );
  }
}

export default App;
