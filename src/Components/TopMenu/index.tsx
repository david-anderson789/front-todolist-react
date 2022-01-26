import React from 'react';
import { Container, TitleMenu, SubMenuTop } from './styled';

interface ITodoList {
  id: number;
  description: string;
  check: boolean;
}

interface IToggleProps {
  istoggleState: number;
  istoggleTab: (index: number) => void;
  isTodoListCont: ITodoList[];
  isCompleteList: ITodoList[];
}

const TopMenu: React.FC<IToggleProps> = function TopMenu({
  istoggleState,
  istoggleTab,
  isTodoListCont,
  isCompleteList,
}) {
  return (
    <Container>
      <TitleMenu>
        <h1>Design</h1>

        <div>
          <small className="active">All</small>
          <small>1h</small>
          <small>2h</small>
          <small>wook</small>
        </div>
      </TitleMenu>
      <SubMenuTop>
        <ul>
          <li className="active">
            <div>
              <p>{isTodoListCont.length}</p>
            </div>
            <button
              className={istoggleState === 1 ? 'active' : ''}
              type="submit"
              onClick={() => istoggleTab(1)}
            >
              <strong>Todo List</strong>
            </button>
          </li>

          <li>
            <div>
              <p>{isCompleteList.length}</p>
            </div>
            <button
              className={istoggleState === 2 ? 'active' : ''}
              type="submit"
              onClick={() => istoggleTab(2)}
            >
              <strong>Complete</strong>
            </button>
          </li>

          <li>
            <strong>Links</strong>
          </li>
        </ul>
      </SubMenuTop>
    </Container>
  );
};

export default TopMenu;
