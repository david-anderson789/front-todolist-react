import React from 'react';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { BsTrash } from 'react-icons/bs';
import { ContainerTodoList, Button } from './styled';

interface ITodoList {
  id: number;
  description: string;
  check: boolean;
}

interface ITodoListProps {
  istoggleState: number;

  isTodoList: ITodoList[];
  isCompleteList: ITodoList[];

  ishandleCheckedTodoList: (id: number, check: boolean) => void;
  ishandleCheckedCompleteTodoList: (id: number, check: boolean) => void;
  ishandleTrashTodoList: (id: number) => void;
  ishandleTrashCheckedComplete: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = function TodoList({
  istoggleState,
  isTodoList,
  isCompleteList,
  ishandleCheckedTodoList,
  ishandleCheckedCompleteTodoList,
  ishandleTrashTodoList,
  ishandleTrashCheckedComplete,
}) {
  return (
    <>
      <ContainerTodoList
        className={
          istoggleState === 1 ? 'activeInputTrade' : 'desableInputTrade'
        }
      >
        <h2>Todo List</h2>
        <ul>
          {isTodoList.map((list) => (
            <li key={list.id}>
              <Button
                type="submit"
                className={list.check === true ? 'active' : ''}
                onClick={() => ishandleCheckedTodoList(list.id, list.check)}
              >
                {list.check === false ? (
                  <ImCheckboxUnchecked color="#3D94F6" size={25} />
                ) : (
                  <ImCheckboxChecked color="#fff" size={25} />
                )}

                <p>{list.description}</p>
              </Button>
              <div>
                <button
                  onClick={() => ishandleTrashTodoList(list.id)}
                  className="excluir"
                  type="submit"
                >
                  <BsTrash color="#ed3505" size={25} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </ContainerTodoList>

      <ContainerTodoList
        className={
          istoggleState === 2 ? 'activeInputTrade' : 'desableInputTrade'
        }
      >
        <h2>Checked</h2>
        <ul>
          {isCompleteList.map((list) => (
            <li key={list.id}>
              <Button
                type="submit"
                className={list.check === true ? 'active' : ''}
                onClick={() =>
                  ishandleCheckedCompleteTodoList(list.id, list.check)
                }
              >
                {list.check === false ? (
                  <ImCheckboxUnchecked color="#3D94F6" size={25} />
                ) : (
                  <ImCheckboxChecked color="#fff" size={25} />
                )}

                <p>{list.description}</p>
              </Button>
              <div>
                <button
                  onClick={() => ishandleTrashCheckedComplete(list.id)}
                  className="excluir"
                  type="button"
                >
                  <BsTrash color="#ed3505" size={25} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </ContainerTodoList>
    </>
  );
};
export default TodoList;
