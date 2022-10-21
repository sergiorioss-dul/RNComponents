import 'react-native-gesture-handler';
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator';
import { NavigationContainer,DefaultTheme, Theme } from '@react-navigation/native';
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
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppState>
  )
}

export default App;
