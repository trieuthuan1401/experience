import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import { Provider, provider } from 'react-redux'
import store from './store'
import './styles/App.scss'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import AddContact from './components/contacts/AddContact';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route path='/contacts/add' component={AddContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>

  )
}

export default App;