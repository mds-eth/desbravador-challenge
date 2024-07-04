import React from 'react';

import { IoIosLogOut } from 'react-icons/io';

import { useSessionContext } from '../../contexts/AuthContext';

import { HeaderComponent } from './styles';

import Tooltip from '../Tooltip';

const Header = () => {
  const { logout } = useSessionContext();

  return (
    <HeaderComponent>
      <Tooltip content="Logout">
        <IoIosLogOut onClick={logout} />
      </Tooltip>
    </HeaderComponent>
  );
};

export default Header;
