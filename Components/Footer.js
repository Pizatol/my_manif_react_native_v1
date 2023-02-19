

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Button_1 from './Button_1'



export default function Footer(props) {

	const goHome = () => {
		props.navigation.push('WelcomeScreen')
	}

  return (
	 <View>
		<Button_1 name={"Home"} />
	 </View>
  )
}

const styles = StyleSheet.create({})