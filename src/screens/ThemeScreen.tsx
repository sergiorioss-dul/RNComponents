import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext';
import { styles } from '../theme/appTheme';

export const ThemeScreen = () => {

  const { setDarkTheme, setLightTheme } =useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Theme' />
        <View
          style={{flexDirection: 'row', justifyContent:'space-between'}}
        >
          <TouchableOpacity
          activeOpacity={0.8}
            onPress={setLightTheme}
            style={{
              backgroundColor:'#5856D6',
              width:150,
              justifyContent:'center',
              height:50,
              borderRadius:20
            }}
          >
            <Text
              style={{
                color:'white',
                textAlign: 'center',
                fontSize: 22
              }}
            >Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={0.8}
            onPress={setDarkTheme}
            style={{
              backgroundColor:'#5856D6',
              width:150,
              justifyContent:'center',
              height:50,
              borderRadius:20
            }}
          >
            <Text
              style={{
                color:'white',
                textAlign: 'center',
                fontSize: 22
              }}
            >Dark</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
