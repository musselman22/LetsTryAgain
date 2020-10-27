import React from 'react';
import {  BrowserRouter as Router,
          Route, } from 'react-router-dom';
import Header from './Header';
import SearchProfiles from './SearchProfiles';
import UserProfile from './UserProfile';
import ViewProfile from './ViewProfile';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Route path="/user-profile/" exact component={UserProfile} />
      <Route path="/search" exact component={SearchProfiles} />
      <Route path="/view-profile/:id" exact component={ViewProfile} />
      <Route path="/" exact component={HomePage} />
    </div>
    </Router>
  );
}

export default App;