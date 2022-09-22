import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const PulltoRefreshScreen = () => {

    const [ refreshing, setRefreshing ] = useState(false);
    const [ data, setData ] = useState<string>('');

    const onRefresh = () => {
        setRefreshing(false);
        setData("Hola!!");
        setTimeout(()=>{
            console.log("Terminamos")
        },1500);
    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }
    >
        <View>
            <HeaderTitle title="Pull to refresh" />
            <HeaderTitle title={data} />


        </View>
    </ScrollView>
  );
}
