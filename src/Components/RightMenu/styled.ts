import styled from 'styled-components';

export const RightMenu = styled.div`
  background: var(--primary);
  width: 100px;
  height: 100vh;
  position: sticky;

  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    list-style: none;
    width: 100%;
    margin-top: 10px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px 0;
      width: 100%;
    }
  }
`;
export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  background: #6928d4;
  color: var(--white);
  border-radius: 50%;

  width: 50px;
  height: 50px;

  margin-bottom: 25px;
`;
export const Logo = styled.div`
  background: #6928d4;
  color: var(--white);

  width: 50px;
  height: 50px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 25px 0 15px;
`;
