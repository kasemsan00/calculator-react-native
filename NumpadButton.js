import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function NumpadButton({ onPressHandler, text, flex = 1, style }) {

	return (
		<TouchableOpacity
			style={[styles.numpad, { flex : flex }, style]}
			activeOpacity={0.9}
			onPress={ () => {
				onPressHandler(text)
			}}
		>
			<Text style={styles.text}>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	numpad: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f7ee65',
		borderColor : '#c9c695',
		borderWidth: 0.2
	},
	text: {
		fontSize: 40,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black'
	}
})