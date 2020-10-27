import React from 'react';
import Auth from './Auth';

const Header = () => {

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Expert Finder</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link" href="/user-profile">Edit Profile</a>
                <a className="nav-link" href="/search">Search Profiles</a>
              </div>
          </div>
          <div className="navbar-nav">
            <Auth />
          </div>
        </div>
      </nav>
  );
};

export default Header;