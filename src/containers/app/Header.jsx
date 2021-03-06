import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import logo from './site-logo.svg';
import './Header.css';

class Header extends Component {
  render()  {
    return (
      <nav>
        <Menu className="app-menu" pointing secondary>
          <Link className="nav-logo" to={'/'}>
            <img src={logo} alt="RedadAlertas" />
          </Link>
          </Menu>
      </nav>
    )
  }
};

export default Header;
