import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
const placeholder = require("@/assets/images/profile1.png")

type Props ={
    imgSource: ImageSourcePropType
}
export default function avatar  () {
    const image:Props = placeholder
  return <Image source={image} style={styles.avatar} />
}

// export default avatar

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height:50,
        borderRadius:30
    },
})