import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Login } from './src/screens/Login';
import Routes from './src/routes';


export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}