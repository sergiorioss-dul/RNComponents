import React, { useRef } from 'react'
import { Animated, PanResponder } from 'react-native';

export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y
            }
        ],{
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }
            ).start();
        }
    });

    const fadeIn = (duration = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                delay: 300,
                useNativeDriver: true
            }
        ).start();
    }

    const startMoving = (initPosicion: number,duration= 300 ) => {
        position.setValue(initPosicion);
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }
        ).start();
    }

    return {
        fadeIn,
        fadeOut,
        opacity,
        startMoving,
        position,
        panResponder,
        pan
    }
}
