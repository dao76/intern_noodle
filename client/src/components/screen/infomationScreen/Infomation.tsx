import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '@components/refactor/Header'
import InfoPeople from './InfoPeople'
import NoodlesChoose from './NoodlesChoose'
import Button from '@components/refactor/Button'
import { navigate } from '@components/navigation/Navigation'
import { UserContext } from '@components/context/UserContext'
import { updateNoodles } from '@components/service/UserService'
import ModalLoading from './ModalLoading'

const Infomation = () => {
  const { userInfo, setUserInfo }: any = useContext(UserContext)
  const [cart, setCart] = useState<any>([])
  const [isShowModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    let arr = userInfo.noodles.map((item: any) => {
      if (item) return 1
      return 0
    })
    setCart(arr)
  }, [userInfo])

  const getNoodles = async () => {
    setShowModal(true)
    let arrTemp = cart.map((item: any) => {
      if (item === 1) return true
      return false
    })
    const res = await updateNoodles(userInfo._id, arrTemp)
    setUserInfo(res.data)
    setShowModal(false)
    navigate('EnjoyNoodles', null)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
        <Header
          size={200}
          urlImage={require('@images/information.png')}
        />
        <InfoPeople user={userInfo} />
        <NoodlesChoose
          cart={cart}
          setCart={setCart}
        />
        <Button
          handler={getNoodles}
          urlImage={require('@images/getNoodles.png')}
          marginTop={75}
        />
      </ImageBackground>
      <ModalLoading isShow={isShowModal} />
    </ScrollView>
  )
}

export default Infomation

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