import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5,6])
    const renderItem = (item:number) => {
        return(
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                    borderRadius: 30
                }}
            />
        )
        /*
        return(
            <Image
                source={{uri:`https://picsum.photos/id/${item}/500/400`}}
                style={{
                    width:'100%',
                    height:400
                }}
            />
        );*/
    }
    const loadMore = () => {
        const newArray: number[] = [];
        for(let i=0;i<5;i++){
            newArray[i] = numbers.length+i;
        }
        setTimeout(()=>{
            setNumbers([...numbers,...newArray]);
        },1500);
    }
  return (
    <View style={{flex:1}}>
        <FlatList
            data={numbers}
            keyExtractor={(item : any) => item.toString()}
            renderItem={({item}) => renderItem(item)}
            ListHeaderComponent={<HeaderTitle title='Infinite Scroll'/>}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => (
                <View
                    style={{
                        height:150,
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <ActivityIndicator size={25} color="#5856d6" />
                </View>
            )}
        />
    </View>
  )
}

const stylesInfiniteScrooll = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height:150
    }
})