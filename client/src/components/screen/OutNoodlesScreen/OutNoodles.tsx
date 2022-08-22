import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native'
import Header from '@components/refactor/Header'
import React from 'react'

const OutNoodles = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
                <Header
                    size={260}
                    urlImage={require('@images/out-of-noodles.png')}
                />
                <Text style={styles.text}>
                    There is <Text style={styles.text0}>0</Text> cup of noodles left in the machine. Please fill in to continue.
                </Text>
                <Image
                    style={styles.image}
                    source={require('@images/group-out-of-noodles.png')}
                    resizeMode='contain'
                />
            </ImageBackground>
        </ScrollView>
    )
}

export default OutNoodles

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    text0: {
        color: 'white',
        fontSize: 17
    },
    text: {
        width: '80%',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#980000'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    container: {
        flexGrow: 1,
    },
})