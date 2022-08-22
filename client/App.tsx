import React from 'react'
import NaivgationContainer from '@components/navigation/NaivgationContainer'
import { LogBox } from 'react-native';
import { UserContextProvider } from '@components/context/UserContext';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return (
    <UserContextProvider>
      <NaivgationContainer />
    </UserContextProvider>
  )
}

export default App


