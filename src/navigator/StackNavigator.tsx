import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { AlertScreen,
        Animation101Screen,
        Animation102Screen,
        HomeScreen,
        PulltoRefreshScreen,
        SwitchScreen,
        TextInputScreen,
        CustomSectionListScreen,
        ModalScreen,
        InfiniteScrollScreen,
        SlidesScreen,
        ThemeScreen
} from '../screens';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Stack = createStackNavigator();

const StackNavigator = () => {

 const { theme } = useContext(ThemeContext)

  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} options={{ headerShown:false }} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} options={{ headerShown:false }} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} options={{ headerShown:false }} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} options={{ headerShown:false }} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} options={{ headerShown:false }} />
        <Stack.Screen name="PulltoRefreshScreen" component={PulltoRefreshScreen} options={{ headerShown:false }} />
        <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} options={{ headerShown:false }} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} options={{ headerShown:false }} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} options={{ headerShown:false }} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} options={{ headerShown:false }} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;