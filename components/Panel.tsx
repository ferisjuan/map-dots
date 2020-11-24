import React from 'react'
import { Button, Dimensions, StyleSheet, View } from 'react-native'

export default () => {
	return (
		<View style={styles.panel}>
			<Button onPress={() => {}} title='Lista' />
			<Button onPress={() => {}} title='Mostrar/ocultar' />
		</View>
	)
}

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
