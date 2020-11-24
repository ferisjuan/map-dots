import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Map, Modal, Panel } from './components'

interface Coordinate {
	latitude: Number
	longitude: Number
}

interface Points {
	coordinate: Coordinate
}

interface Point {
	x: Number
	y: Number
}

interface LongPressEvent {
	nativeEvent: { coordinate: Coordinate; position: Point }
}

export default function App() {
	const [points, setPoints] = useState<Points[]>([])

	const handleLongPress: any = ({ nativeEvent }: LongPressEvent) => {
		const newPoints = points.concat({ coordinate: nativeEvent.coordinate })
		setPoints(newPoints)

		console.log(points)
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
