import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
`;
export const TitleMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 40px;
  }

  small {
    margin-left: 5px;

    padding: 3px 8px;
    border-radius: 12px;
  }
  .active {
    background: var(--primary);
    color: var(--white);
  }
`;
export const SubMenuTop = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 15px 10px;
      margin-right: 35px;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        background: transparent;
        border: 0;
        cursor: pointer;

        &.active {
          border-bottom: 3px solid var(--primary);
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 15px;
        background: var(--primary);
        padding: 5px;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        p {
          color: var(--white);
          font-size: 12px;
          font-weight: bold;
        }
      }

      strong {
      }
    }
  }
`;
