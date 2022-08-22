import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalLoading = ({ isShow }: any) => {
    return (
        <Modal
            visible={isShow}
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Vui lòng đợi...</Text>
                </View>
            </View>
        </Modal>
    )
}

export default ModalLoading

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    },
    containerText: {
        backgroundColor: 'white',
        height: 40,
        width: 200,
        justifyContent: 'center',
        paddingLeft: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
})