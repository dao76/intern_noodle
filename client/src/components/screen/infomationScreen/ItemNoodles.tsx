import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '@components/context/UserContext'

const ItemNoodles = (props: any) => {
    const { cart, setCart, index, noodlesImage } = props
    const [choose, setChoose] = useState<boolean>(false)

    const choosenoodles = () => {
        setChoose(!choose)
        if (choose === true) {
            cart[index] = 1
        } else {
            cart[index] = 2
        }
        setCart(cart)
    }

    return (
        <TouchableOpacity
            onPress={choosenoodles}
            disabled={!cart[index]}
            style={styles.noodlesContainer}
        >
            {(cart[index] > 1) &&
                <Image
                    style={styles.noodlesChoose}
                    source={require('@images/noodlesChoose.png')}
                    resizeMode='contain'
                />
            }

            {cart[index] != 0 ?
                <Image
                    style={styles.noodlesImage}
                    source={noodlesImage}
                    resizeMode='contain'
                /> :
                <>
                    <Image
                        style={[styles.noodlesImage, { position: 'absolute' }]}
                        source={require('@images/noodlesDisable.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.textUnavailable}>Unavailable</Text>
                </>

            }
        </TouchableOpacity>
    )
}

export default ItemNoodles

const styles = StyleSheet.create({
    textUnavailable: {
        position: 'absolute',
        bottom: -10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A09A9A'
    },
    noodlesChoose: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    noodlesImage: {
        width: '100%',
        height: '100%'
    },
    noodlesContainer: {
        width: 80,
        height: 110
    },
})