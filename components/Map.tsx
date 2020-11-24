import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

interface MapProps {
	onLongpress: () => {}
}

export default ({ onLongpress }: MapProps) => {
	return <MapView style={styles.map} onLongPress={onLongpress} />
}

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width,
	},
})
