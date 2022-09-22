import { createStackNavigator } from '@react-navigation/stack';
import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import HomeScreen from '../screens/HomeScreen';
import { PulltoRefreshScreen } from '../screens/PulltoRefreshScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
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
    </Stack.Navigator>
  );
}

export default StackNavigator;