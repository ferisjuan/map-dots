import React from 'react'
import {
	Button,
	Dimensions,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import { Coordinate, Coordinates, Point } from '../interfaces/Coordinate'

type Props = {
	points: Point[]
	closeModal: () => void
}

export default ({ points, closeModal }: Props) => {
	return (
		<>
			<View style={styles.list}>
				<FlatList
					data={points.map((p: Point) => p.name)}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Text>{item}</Text>
						</View>
					)}
					keyExtractor={item => item}
				/>
			</View>
			<View style={styles.button}>
				<Button title='Cerrar' onPress={closeModal} />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get('window').height - 300,
	},
	item: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		height: 60,
		justifyContent: 'center',
		padding: 15,
	},
	button: {
		padding: 15,
	},
})
