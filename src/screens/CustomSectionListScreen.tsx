import { Header } from '@react-navigation/stack';
import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { Casas } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman","Superman","Robbin"]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman","Thor","Iron man"]
    },
    {
      casa: "Anime",
      data: ["Goku","Saitama","Sasuke"]
    },
  ];

export const CustomSectionListScreen = () => {
  return (
    <View
        style={{...styles.globalMargin,flex:1}}
    >
        <SectionList
            sections={casas}
            ListHeaderComponent={() => <HeaderTitle title='Section List'/>}
            ListFooterComponent={() => <HeaderTitle title='Total de casas'/>}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item,index) => item+index }
            renderSectionHeader={({section}) => <HeaderTitle title={section.casa} />}
            renderSectionFooter={ ({section}) => <HeaderTitle title='Copyright 2022'/>}
        />
    </View>
  )
}
