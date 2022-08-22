import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { UserContext } from '@components/context/UserContext';
import Header from '@components/refactor/Header';


const ScanQRCodeScreen = (props: any) => {
    const { navigation } = props
    const [hasPermission, setHasPermission] = useState(null)
    const [scaned, setScaned] = useState<boolean>(false)
    const { onLogin }: any = useContext(UserContext)

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }

    useEffect(() => {
        askForCameraPermission()
    }, [])

    const handleBarCodeScanned = async ({ type, data }: any) => {
        setScaned(true)
        const res = await onLogin(data)
        if (res.error) return navigation.replace('Error')

        console.log('noodles: ' + JSON.stringify(res.data.noodles))
        let noodles = res.data.noodles.filter((item: boolean) => item === true)
        console.log('noodlessss: ' + JSON.stringify(noodles))
        if (noodles.length === 0) return navigation.replace('OutNoodles')
        navigation.replace('Infomation')
    }

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title='Allow Camera' onPress={() => askForCameraPermission()} />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
                <Header
                    urlImage={require('@images/welcome.png')}
                />
                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scaned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }} />
                </View>
                {scaned && <Text>Đang xác minh, vui lòng chờ!</Text>}
            </ImageBackground>
        </View>
    )
}

export default ScanQRCodeScreen

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato',
        top: -47
    },
    maintext: {
        fontSize: 16,
        margin: 20
    }
})