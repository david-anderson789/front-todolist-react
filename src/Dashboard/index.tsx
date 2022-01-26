import React, { useState } from 'react';

import { MdOutlineAdd } from 'react-icons/md';
import Header from '../Components/RightMenu';
import { Container, DownMenu } from './styled';

import SideBar from '../Components/SideBar';

interface ITodoList {
  id: number;
  description: string;
  check: boolean;
}

const Dashboard: React.FC = function Dashboard() {
  const [addList, setAddList] = useState<ITodoList[]>([]);
  const [completeList, setCompleteList] = useState<ITodoList[]>([]);
  const [tooltip, setTooltip] = useState(true);
  const [message, setMessage] = useState('');

  const handleTooltips = () => {
    if (tooltip === true) {
      setTooltip(false);
    } else {
      setTooltip(true);
    }
  };

  const handleAddTodoLIst = () => {
    setAddList([
      ...addList,
      { id: addList.length, description: message, check: false },
    ]);

    setTooltip(true);
    setMessage('');
  };

  const handleChecked = (id: number, check: boolean) => {
    const busca = addList.findIndex((array) => array.id === id);
    if (check === false) {
      addList[busca] = {
        ...addList[busca],
        check: true,
      };
    } else if (check === true) {
      addList[busca] = {
        ...addList[busca],
        check: false,
      };
    }

    setCompleteList([
      ...completeList,
      { ...addList[busca], id: completeList.length },
    ]);

    addList.splice(busca, 1);

    setAddList(addList.map((list) => list));
  };

  const handleCheckedComplete = (id: number, check: boolean) => {
    const busca = completeList.findIndex((array) => array.id === id);
    if (check === false) {
      completeList[busca] = {
        ...completeList[busca],

        check: true,
      };
    } else if (check === true) {
      completeList[busca] = {
        ...completeList[busca],

        check: false,
      };
    }

    setAddList([...addList, { ...completeList[busca], id: addList.length }]);

    completeList.splice(busca, 1);

    setCompleteList(completeList.map((list) => list));
  };

  const handleTrashItemTodoList = (id: number) => {
    const buscar = addList.findIndex((array) => array.id === id);

    addList.splice(buscar, 1);

    setAddList(addList.map((list) => list));
  };

  const handleTrashItemCheckedComplete = (id: number) => {
    const buscar = completeList.findIndex((array) => array.id === id);

    completeList.splice(buscar, 1);

    setCompleteList(completeList.map((list) => list));
  };

  return (
    <Container>
      <Header />

      <SideBar
        isAddList={addList}
        isCompleteList={completeList}
        ishandleChecked={handleChecked}
        ishandleCheckedComplete={handleCheckedComplete}
        ishandleTrashItemTodoList={handleTrashItemTodoList}
        ishandleTrashItemCheckedComplete={handleTrashItemCheckedComplete}
      />

      <DownMenu isTooltip={tooltip}>
        <div className="redz">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" onClick={handleAddTodoLIst}>
            Adicionar
          </button>
        </div>
        <ul>
          <li>
            <button type="submit" onClick={handleTooltips}>
              <MdOutlineAdd color="#fff" size={18} />
            </button>
          </li>
        </ul>
      </DownMenu>
    </Container>
  );
};

export default Dashboard;
