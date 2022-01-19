import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { Contact } from './components/Contact';
import ReactFragmentDemo from './components/ReactFragmentDemo';
import StateDescription from './components/StateDescription';
import OnclickEventHandler from './components/OnclickEventHandler';
import { OneWayBinding } from './components/Demos/oneWayBinding/OneWayBinding';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/reactFragmentDemo' component={ReactFragmentDemo} />
        <Route path='/stateDescription' component={StateDescription} />
        <Route path='/onclickEventHandler' component={OnclickEventHandler} />
        <Route path='/oneWayBinding' component={OneWayBinding} />
      </Layout>
    );
  }
}
