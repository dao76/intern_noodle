import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import Header from '@components/refactor/Header'
import React from 'react'
import CardError from './CardError'
import FollowArrow from '@components/refactor/FollowArrow'
import Scan from '@components/refactor/Scan'

const Error = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
                <Header
                    size={130}
                    urlImage={require('@images/error.png')}
                />
                <CardError />
                <FollowArrow />
                <Scan marginTop={75} />
            </ImageBackground>
        </ScrollView>
    )
}

export default Error

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    container: {
        flexGrow: 1,
    },
})