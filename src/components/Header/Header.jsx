import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import profileIconImg from '../../images/profileIcon.svg';
import Button from '../Generics/Button';
import HeaderContainer from './styles';
import Logo from './Logo';

function Header({ children, heading, logoSrc }) {
  const history = useHistory();

  const handleRedirectToProfile = (ev) => {
    ev.preventDefault();
    history.push('/perfil');
  };

  return (
    <HeaderContainer>
      <div className="title-container">
        <Link to="/comidas">
          <Logo logoSrc={ logoSrc } />
        </Link>
        <div className="header-title-container">
          <h1 data-testid="page-title">{ heading }</h1>
        </div>
      </div>
      <div className="container">
        <Button onClick={ handleRedirectToProfile }>
          <img
            src={ profileIconImg }
            data-testid="profile-top-btn"
            alt="Logo da página de perfil"
          />
        </Button>
        { children }
      </div>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  children: '',
  heading: '',
};

Header.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  logoSrc: PropTypes.string.isRequired,
};

export default Header;
