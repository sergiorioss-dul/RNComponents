import React from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({ uri, style } :Props) => {

    const { opacity,fadeIn } = useAnimation();
    const [isLoaded, setisLoaded] = useState(true);
    const finishLoading = () => {
        setisLoaded(false);
        fadeIn();
    }
  return (
    <View
        style={{
            justifyContent:'center',
            alignItems:'center'
        }}
    >
        {
            isLoaded && <ActivityIndicator color="#5856D6" size={30} style={{ position:'absolute' }} />
        }
        <Animated.Image
            source={{uri}}
            onLoadEnd={finishLoading }
            style={{...style as any, opacity}}
        />
    </View>
  )
}
