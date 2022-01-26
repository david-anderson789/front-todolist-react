import React, { useState } from 'react';
import TodoList from '../TodoList';

import TopMenu from '../TopMenu';
import { Container } from './styled';

interface ITodoList {
  id: number;
  description: string;
  check: boolean;
}

interface IArrayTodoListProps {
  isAddList: ITodoList[];
  isCompleteList: ITodoList[];
  ishandleChecked: (id: number, check: boolean) => void;
  ishandleCheckedComplete: (id: number, check: boolean) => void;
  ishandleTrashItemTodoList: (id: number) => void;
  ishandleTrashItemCheckedComplete: (id: number) => void;
}

const SideBar: React.FC<IArrayTodoListProps> = function SideBar({
  isAddList,
  isCompleteList,
  ishandleChecked,
  ishandleCheckedComplete,
  ishandleTrashItemTodoList,
  ishandleTrashItemCheckedComplete,
}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number): void => {
    setToggleState(index);
  };

  return (
    <Container>
      <TopMenu
        istoggleState={toggleState}
        istoggleTab={toggleTab}
        isTodoListCont={isAddList}
        isCompleteList={isCompleteList}
      />

      <TodoList
        istoggleState={toggleState}
        isTodoList={isAddList}
        isCompleteList={isCompleteList}
        ishandleCheckedTodoList={ishandleChecked}
        ishandleCheckedCompleteTodoList={ishandleCheckedComplete}
        ishandleTrashTodoList={ishandleTrashItemTodoList}
        ishandleTrashCheckedComplete={ishandleTrashItemCheckedComplete}
      />
    </Container>
  );
};

export default SideBar;
