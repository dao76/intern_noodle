import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
    PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import { useFonts } from '@expo-google-fonts/paytone-one'
import AppLoading from 'expo-app-loading'

const Like = () => {
    let [fontsLoaded, error] = useFonts({
        PaytoneOne_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                style={styles.likeImage}
                resizeMode='contain'
                source={require('@images/like.png')}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.textEnjoy]}>Enjoy your noodles </Text>
            <Image
                style={styles.favourite}
                resizeMode='contain'
                source={require('@images/favourite.png')}
            />
        </View>
        </View >
    )
}

export default Like

const styles = StyleSheet.create({
    textEnjoy: {
        color: '#C71A1A',
        fontSize: 20,
        fontFamily: 'PaytoneOne_400Regular'
    },
    favourite: {
        width: 30,
        height: 30
    },
    likeImage: {
        width: 200,
        height: 200
    },
})