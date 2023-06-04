import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <NativeBaseProvider>
      <Login/>
    </NativeBaseProvider>
  );
}