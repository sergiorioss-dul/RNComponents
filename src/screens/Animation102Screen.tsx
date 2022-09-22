import React from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {

  const { panResponder,pan } = useAnimation();

  return (
    <View style={styles.container}>
        <Animated.View 
          {...panResponder.panHandlers}
          style={[pan.getLayout(),styles.box]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#75CEDB',
    width:150,
    height:150
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4
  }
});
