import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Input, Map, Modal, Panel } from './components'

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
	const [nombre, setNombre] = useState('')
	const [tempPoint, setTempPoint] = useState<Coordinate>({
		latitude: 0,
		longitude: 0,
	})
	const [visibility, setVisibility] = useState(false)

	const handleLongPress: any = ({ nativeEvent }: LongPressEvent) => {
		setTempPoint(nativeEvent.coordinate)
		setVisibility(true)
	}

	const handleChangeText = (text: string): void => {
		setNombre(text)
	}

	return (
		<View style={styles.container}>
			<Map onLongpress={handleLongPress} />
			<Modal visibility={visibility}>
				<Input
					title='Nombre'
					placeholder='Nombre del Punto'
					onChangeText={handleChangeText}
				/>
			</Modal>
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
