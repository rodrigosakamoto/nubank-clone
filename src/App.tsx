import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#8b10ae" barStyle="light-content" />
      <Main />
    </>
  );
};
export default App;
