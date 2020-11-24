import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { Point } from '../interfaces/Coordinate'

interface MapProps {
	onLongpress: () => {}
	points: Point[]
	pointsFilter: boolean
}

export default ({ onLongpress, points, pointsFilter }: MapProps) => {
	return (
		<MapView style={styles.map} onLongPress={onLongpress}>
			{pointsFilter &&
				points.map((p: Point) => (
					<Marker key={p.name} coordinate={p.coordinate} title={p.name} />
				))}
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width,
	},
})
