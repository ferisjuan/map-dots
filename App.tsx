import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Map, Modal, Panel } from './components'

export default function App() {
	const handleLongPress: any = (nativeEvent: any) => {
		console.log(nativeEvent)
	}
	return (
		<View style={styles.container}>
			<Map onLongpress={handleLongPress} />
			<Modal />
			<Panel />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 35,
	},
})
