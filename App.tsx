import 'react-native-gesture-handler';
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/themeContext';

const App = () => {

  const AppState = ({children} : any) => {
    return(
      <ThemeProvider>
        {children}
      </ThemeProvider>
    )
  }
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  )
}

export default App;
