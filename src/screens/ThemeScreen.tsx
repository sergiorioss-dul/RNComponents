import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext';
import { styles } from '../theme/appTheme';

export const ThemeScreen = () => {

  const { setDarkTheme } =useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Theme' />
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
          >Light / Dark</Text>
        </TouchableOpacity>
    </View>
  )
}
