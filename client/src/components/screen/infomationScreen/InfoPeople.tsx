import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoPeople = (props: any) => {
  const { user } = props

  const birthDay = (date: string) => {
    const [year, month, day] = date.split('-');
    return [month, day, year].join('/');
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.imgBackground}
      >
        <Image
          style={styles.avatar}
          source={{ uri: user.img }}
          resizeMode='contain'
        />

        <View>
          <Text style={styles.textField}>Full Name:</Text>
          <Text style={styles.textField}>Birthday:</Text>
          <Text style={styles.textField}>Gender:</Text>
          <Text style={styles.textField}>Department:</Text>
        </View>

        <View>
          <Text style={styles.textValue}>{user.fullName}</Text>
          <Text style={styles.textValue}>{birthDay(user.birthday)}</Text>
          <Text style={styles.textValue}>{user.gender}</Text>
          <Text style={styles.textValue}>{user.department}</Text>
        </View>
      </View>
    </View>
  )
}

export default InfoPeople

const styles = StyleSheet.create({
  textValue: {
    color: '#880B0B',
  },
  textField: {
    color: '#880B0B',
    fontWeight: 'bold'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,

  },
  imgBackground: {
    width: 310,
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 20
  },
  container: {
    width: 320,
    height: 135,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  }
})