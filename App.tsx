import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Routes from './src/routes';
import { UserProvider } from './src/contexts/UserContext';


export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </NativeBaseProvider>
  );
}