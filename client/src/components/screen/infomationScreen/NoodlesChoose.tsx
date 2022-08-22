import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ItemNoodles from './ItemNoodles'

const NoodlesChoose = (props: any) => {
    const { cart, setCart } = props

    return (
        <View style={styles.container}>
            <View style={styles.noodlesContainer}>
                <ItemNoodles
                    cart={cart}
                    setCart={setCart}
                    index={0}
                    noodlesImage={require('@images/noodles1.png')}
                />
                <ItemNoodles
                    cart={cart}
                    setCart={setCart}
                    index={1}
                    noodlesImage={require('@images/noodles2.png')}
                />
                <ItemNoodles
                    cart={cart}
                    setCart={setCart}
                    index={2}
                    noodlesImage={require('@images/noodles3.png')}
                />
            </View>
            <Text style={styles.textContainer}>
                <Text style={styles.textQuantity}>{cart.filter((item: any) => item !== 0).length}</Text> cups of  noodles left this month
            </Text>
        </View>
    )
}

export default NoodlesChoose

const styles = StyleSheet.create({
    textQuantity: {
        color: '#D91313',
        fontSize: 12
    },
    textContainer: {
        color: '#9C6666',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 20
    },
    noodlesContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        width: '100%',
        alignItems: 'center',
    }
})