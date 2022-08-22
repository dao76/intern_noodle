import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FollowArrow = (props: any) => {
    const { marginTop } = props
    return (
        <View style={[styles.container, { marginTop: marginTop }]}>
            <Image
                resizeMode='contain'
                style={styles.imageScan}
                source={require('@images/scan.png')}
            />
            <Text style={styles.textFollow}>Follow the arrow to scan card</Text>
        </View>
    )
}

export default FollowArrow

const styles = StyleSheet.create({
    textFollow: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#AE0808',
        marginLeft: 10
    },
    imageScan: {
        width: 40,
        height: 40
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})