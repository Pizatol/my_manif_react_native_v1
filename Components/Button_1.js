import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button_1 = (props) => {
  return (
	 <View>
		<TouchableOpacity onPress={props.press}>
					<View style={css.button}>
						<Text>
							{props.name}
						</Text>
					</View>
				</TouchableOpacity>
	 </View>
  )
}

export default Button_1

const css = StyleSheet.create({
	button : {
		backgroundColor: "lightblue",
		borderColor: "darkblue",
		borderWidth : 2,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius : 5

	 }
})