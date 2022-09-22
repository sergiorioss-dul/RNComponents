import React,{ useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

  const [ state,setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const { isActive, isHungry, isHappy } = state;
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    });
  }
  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View style={{flexDirection:'row'}}>
        <Text style={styles.switchText}>isActive?  </Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value,'isActive')} />
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.switchText}>isHungry?  </Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value,'isHungry')} />
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.switchText}>isHappy?  </Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value,'isHappy')} />
      </View>

        
      <View
        style={{
          borderBottomWidth: 5,
          opacity:0.4
        }}
      />
      <Text style={styles.switchText}>
        {JSON.stringify(state,null,5)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    switchText: {
      fontSize:25
    },
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});
