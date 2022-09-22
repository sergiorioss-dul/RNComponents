import React from 'react'
import { styles } from '../theme/appTheme';
import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

const HomeScreen = () => {

   const itemSeparator = () => {
    return(
      <View
        style={{
          borderBottomWidth: 5,
          opacity:0.4
        }}
      />
    );
  }
  return (
    <View style={{flex:1, ...styles.globalMargin}}>
      <FlatList
        ItemSeparatorComponent={itemSeparator}
        data={menuItems}
        renderItem={ ({item})  => <FlatListMenuItem menuItem={item} /> }
        keyExtractor={ (item) => item.name }
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
      />
    </View>
  )
}


export default HomeScreen;