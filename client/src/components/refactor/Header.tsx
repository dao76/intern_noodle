import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Header = (props: any) => {

    const { urlImage, size } = props

    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.imageLogo} source={require('@images/logo.png')} />
            <Image resizeMode='contain' style={[styles.image, { width: size }]} source={urlImage} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        marginBottom: 20,
        height: 70
    },
    imageLogo: {
        marginTop: 50,
        width: 180,
        height: 90
    },
    container: {
        alignItems: 'center'
    }
})