import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

function UserContextProvider({ children }) {
  const history = useHistory();
  const [emailData, setEmail] = useState('');
  const [passwordData, setPassword] = useState('');
  const [disabledData, setDisabled] = useState(true);

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    const subscription = () => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const lengthSix = 6;
      if (re.test(emailData)
        && passwordData.trim().length > lengthSix) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    subscription();
    return () => {
      cancel = true;
    };
  }, [emailData, passwordData]);

  const handleClick = () => {
    const user = { email: emailData };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/comidas');
  };

  const contextValue = {
    disabledData,
    setEmail,
    setPassword,
    handleClick,
  };

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
