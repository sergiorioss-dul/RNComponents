import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const ModalScreen = () => {

    const [isVisible, setVisible] = useState(false)
  return (
    <View>
        <HeaderTitle title='Modal' />
        <Button 
            title='Abrir modal'
            onPress={() => setVisible(true)}
        />
        <Modal
            animationType='slide'
            visible={isVisible}
            transparent
        >
            <View
                style={{
                    flex:1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={{
                    backgroundColor:'white',
                    width:200,
                    height:200,
                    justifyContent: 'center',
                    alignItems:'center',
                    shadowOffset:{
                        width:0,
                        height:10
                    },
                    shadowOpacity: 0.25
                }}>
                    <HeaderTitle title='¿Estas seguro?' />
                    <Text>Cuerpo del modal</Text>
                    <Button 
                        title='Salir'
                        onPress={() => setVisible(false)}
                    />
                </View>

            </View>
        </Modal>
    </View>
  )
}
