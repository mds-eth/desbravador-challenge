import React from 'react';

import { IoIosLogOut } from "react-icons/io";

import { useSessionContext } from '../../contexts/AuthContext';

import { HeaderComponent } from './styles.js';

const Header = () => {
  const { logout } = useSessionContext();

  return (
    <HeaderComponent>
      <IoIosLogOut onClick={logout} />
    </HeaderComponent>
  );
};

export default Header;
