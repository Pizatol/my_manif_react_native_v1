import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Footer from '../Components/Footer'

const Detail = () => {
  return (
	 <View style={styles.container}>
		<Text> Detail Screen !</Text>
		<Footer/>
	 </View>
  )
}

export default Detail

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightgrey",
  },
})