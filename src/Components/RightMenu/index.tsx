import React from 'react';
import {
  BsInbox,
  BsStar,
  BsCalendar2Week,
  BsCheck2,
  BsTrash,
} from 'react-icons/bs';

import { RightMenu, Logo, Perfil } from './styled';

const Header: React.FC = function Header() {
  return (
    <RightMenu>
      <Logo>Logo</Logo>
      <ul>
        <li>
          <BsInbox color="#fff" size={25} opacity={0.5} />
        </li>
        <li>
          <BsStar color="#fff" size={25} />
        </li>
        <li>
          <BsCalendar2Week color="#fff" size={25} opacity={0.5} />
        </li>
        <li>
          <BsCheck2 color="#fff" size={25} opacity={0.5} />
        </li>
        <li>
          <BsTrash color="#fff" size={25} opacity={0.5} />
        </li>
      </ul>
      <Perfil>Perfil</Perfil>
    </RightMenu>
  );
};
export default Header;
