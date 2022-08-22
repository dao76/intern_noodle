import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Button = (props: any) => {
    const { urlImage, handler, marginTop } = props

    return (
        <TouchableOpacity
            onPress={handler}
            style={[styles.container, {marginTop: marginTop}]}>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={urlImage}
            />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        width: 220,
        height: 50,
    }
})