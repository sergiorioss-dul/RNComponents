import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {

  const showPrompt = () => {
    Alert.prompt(
        "¿Cual es tu mensaje?",
        "Escribe aquí tu nombre",
        (valor: string) => console.log('info ->',valor),
        'plain-text',
        '0',
        'number-pad'
    )
  }

  const showAlerts = () => {
    Alert.alert(
        "Alert",
        "Subtitle",
        [
            {
                text:"Cancel",
                onPress: () => console.log("Cancel Press"),
                style: "destructive"
            },
            {
                text: "OK",
                onPress: () => console.log("OK PRESS"),
            }
        ],
        {
            cancelable: true
        }
    );
  }

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle 
            title='Alerts'
        />
        <Button 
            title='Mostrar alerta'
            onPress={showAlerts}
        />
        <Button 
            title='Mostrar Prompt'
            onPress={showPrompt}
        />
    </View>
  )
}
