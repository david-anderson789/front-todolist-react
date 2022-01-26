import styled from 'styled-components';

export const ContainerTodoList = styled.div`
  padding: 20px 0;
  overflow-y: scroll;

  padding-bottom: 15px;
  margin-bottom: 26px;

  ul {
    list-style: none;
    padding: 10px 6px;

    li {
      display: flex;

      align-items: center;
      border-bottom: 1px solid #ffe6ff;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6.5px 0;
        border-top: 1px solid #ffe6ff;

        button.excluir {
          margin-right: 5px;
          border: 0;
          background: transparent;
          cursor: pointer;
          padding: 0 5px;
          border-radius: 12px;
        }
      }

      .active {
        background: var(--primary);

        p {
          text-decoration: line-through;
        }
      }

      p {
        margin-left: 8px;
        opacity: 0.8;
      }
    }
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 0;
  padding-left: 15px;

  border: 0;
  background: transparent;
  cursor: pointer;

  width: 100%;

  p {
    font-weight: 500;
  }

  &:hover {
    background: #e7ffff;
  }
`;
