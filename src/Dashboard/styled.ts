import styled, { css } from 'styled-components';

interface ContainerProps {
  isTooltip?: boolean;
  isTodoSelect?: boolean;
}

export const Container = styled.div`
  display: flex;

  .activeInputTrade {
  }
  .desableInputTrade {
    display: none;
  }
`;

export const DownMenu = styled.div<ContainerProps>`
  position: absolute;
  bottom: 0;

  margin-left: 155px;
  margin-bottom: 25px;
  margin-right: 45px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 15px;

      height: 55px;
      width: 55px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: 0;
        cursor: pointer;
      }
    }

    li:nth-child(1) {
      background: var(--primary);
      border-radius: 50%;
    }
  }
  .redz {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: var(--white);

    height: 200px;
    width: 250px;
    border: 1px solid #d9dcff;

    /* margin-left: 175px; */

    margin-bottom: 20px;

    padding: 10px 0;

    border-radius: 12px;

    ${(props) =>
      props.isTooltip &&
      css`
        display: none;
      `}

    input {
      width: 230px;
      height: 120px;
      border-radius: 12px;
      border: 1px solid #d9dcff;

      padding: 15px;
    }
    button {
      background: var(--primary);
      padding: 10px 45px;
      border: 0;
      border-radius: 12px;
      font-weight: bold;
      color: var(--white);
      cursor: pointer;
    }
  }
`;
