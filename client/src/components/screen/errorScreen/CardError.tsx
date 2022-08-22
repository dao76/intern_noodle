import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardError = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.textCannot}>Can not recongnize your ID card.</Text>
            <Text style={styles.textPlease}>Please scan again.</Text>
            <Image
                style={styles.cardImage}
                source={require('@images/cardError.png')}
                resizeMode='contain'
            />
        </View>
    )
}

export default CardError

const styles = StyleSheet.create({
    cardImage: {
        width: 100,
        height: 150,
    },
    textPlease: {
        color: 'white',
        backgroundColor: '#D86643',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
        padding: 8,
        borderRadius: 5
    },
    textCannot: {
        color: '#980000',
        fontWeight: 'bold',
        fontSize: 17
    }
})