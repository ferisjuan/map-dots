import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

import { Point } from './interfaces/Coordinate'

import { Input, List, Map, Modal, Panel } from './components'
import {
	Coordinates,
	Coordinate,
	LongPressEvent,
} from './interfaces/Coordinate'

enum LIST_TYPE {
	newPoint = 'new_point',
	allPoints = 'all_points',
}

export default function App() {
	const [points, setPoints] = useState<Point[]>([])
	const [name, setName] = useState('')
	const [tempPoint, setTempPoint] = useState<Coordinate>({
		latitude: 0,
		longitude: 0,
	})
	const [visibilityFilter, setVisibilityFilter] = useState(LIST_TYPE.newPoint)
	const [visibility, setVisibility] = useState(false)
	const [pointsFilter, setPointsFilter] = useState(true)

	const handleLongPress: any = ({ nativeEvent }: LongPressEvent) => {
		setTempPoint(nativeEvent.coordinate)
		setVisibilityFilter(LIST_TYPE.newPoint)
		setVisibility(true)
	}

	const handleChangeText = (text: string): void => {
		setName(text)
	}

	const handleSubmit = () => {
		const point = {
			name,
			coordinate: tempPoint,
		}

		setPoints(points.concat(point))
		cleanState()
	}

	const handleCancel = () => {
		cleanState()
	}

	const cleanState = () => {
		setVisibility(false)
		setName('')
	}

	const handleShowAllPoints = (): void => {
		setVisibilityFilter(LIST_TYPE.allPoints)
		setVisibility(true)
	}

	const togglePointsFilter = () => {
		setPointsFilter(!pointsFilter)
	}

	return (
		<View style={styles.container}>
			<Map
				onLongpress={handleLongPress}
				points={points}
				pointsFilter={pointsFilter}
			/>
			<Panel
				onPressLeftButton={handleShowAllPoints}
				leftButtonText='Lista'
				onPressRightButton={togglePointsFilter}
				rightButtonText='Mostrar/ocultar'
			/>
			<Modal visibility={visibility}>
				{visibilityFilter === LIST_TYPE.newPoint ? (
					<>
						<Input
							title='Nombre'
							placeholder='Nombre del Punto'
							onChangeText={handleChangeText}
						/>
						<View style={styles.actionButtons}>
							<Button title='Aceptar' onPress={handleSubmit} />
							<Button title='Cancelar' onPress={handleCancel} />
						</View>
					</>
				) : (
					<List points={points} closeModal={handleCancel} />
				)}
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 35,
	},
	actionButtons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 30,
	},
})
