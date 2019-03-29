import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import SearchList from './components/SearchList/SearchList';
import FoodSection from './containers/FoodDescription/FoodDescription';
import FoodPlan from './containers/FoodPlan/FoodPlan';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <SearchList/>
        <FoodSection/>
        <FoodPlan/>
      </Layout>
    );
  }
}

export default App;
