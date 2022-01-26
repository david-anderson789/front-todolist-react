import React from 'react';
import Dashboard from './Dashboard';
import GlobalStyle from './styles/global';

const App: React.FC = function App() {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
};

export default App;
