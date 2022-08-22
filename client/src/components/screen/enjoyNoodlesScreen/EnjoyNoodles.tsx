import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import Header from '@components/refactor/Header'
import React from 'react'
import Like from './Like'
import Button from '@components/refactor/Button'
import GetBellow from './GetBellow'
import { navigate } from '@components/navigation/Navigation'

const EnjoyNoodles = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
                <Header
                    size={100}
                    urlImage={require('@images/done.png')}
                />
                <Like />
                <Button  
                    handler={() => navigate('Welcome', null)}
                    urlImage={require('@images/backToHome.png')}
                    marginTop={80}
                />
                <GetBellow />
            </ImageBackground>
        </ScrollView>
    )
}

export default EnjoyNoodles

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