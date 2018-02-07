import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Home from '../home'
import About from '../about'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import VisibleHeader from '../../styleGuide/header/VisibleHeader'
import VisibleMenuDrawer from '../../styleGuide/menuDrawer/VisibleMenuDrawer'
import TestPage from '../sandbox/persistingFormDataToBackend/CreateTestPage'
import ViewTestDataPage from '../sandbox/persistingFormDataToBackend/ViewTestDataPage'

export default class App extends Component {

  muiTheme = getMuiTheme({
    spacing: 1000,
    fontFamily: 'Roboto, sans-serif',
  });

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
         <VisibleHeader />
          <main>
            <VisibleMenuDrawer />
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/test/1" component={TestPage} />
            <Route exact path="/testData/:id" component={ViewTestDataPage} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
