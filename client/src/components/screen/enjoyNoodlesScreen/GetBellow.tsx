import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const GetBellow = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Get them bellow</Text>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={require('@images/arrowYellow.png')}
            />
        </View>
    )
}

export default GetBellow

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 40,
    },
    text: {
        color: '#F8C135',
        fontWeight: 'bold',
        fontSize: 18
    },
    container: {
        alignItems: 'center',
        marginTop: 25
    }
})