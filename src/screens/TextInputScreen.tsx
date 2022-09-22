import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

  const { onChange, form, isSubscribed } = useForm({
    name:'',
    email:'',
    phone:'',
    isSubscribed: false
  });
  const _onChange = () => {
    onChange(!form.isSubscribed,'isSubscribed');
  }
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <ScrollView>
        <View style={styles.globalMargin}>
            <HeaderTitle title='Text Inputs'/>
            <TextInput 
                style={stylesInput.inputStyle}
                placeholder="Ingrese su nombre"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(value) => onChange(value,'name')}
                keyboardAppearance="dark"
            />
            <TextInput 
                style={stylesInput.inputStyle}
                placeholder="Ingrese su email"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(value) => onChange(value,'email')}
            />
            <Text>¿Suscrito?</Text>
            <CustomSwitch isOn={isSubscribed} onChange={_onChange} />
            <HeaderTitle title={JSON.stringify(form,null,3)}/>
            <HeaderTitle title={JSON.stringify(form,null,3)}/>
            <TextInput 
                style={stylesInput.inputStyle}
                placeholder="Ingrese su teléfono"
                keyboardType='number-pad'
                onChangeText={(value) => onChange(value,'phone')}
            />
        </View>
        <View style={{height:100}} />
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesInput = StyleSheet.create({
     inputStyle: {
        borderWidth: 1,
        borderColor: 'grey',
        height:50,
        paddingHorizontal:10,
        borderRadius: 10,
        marginVertical:10

     }
});