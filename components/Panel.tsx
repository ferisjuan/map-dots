import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

type Props = {
	onPressLeftButton: () => void
	onPressRightButton: () => void
	leftButtonText: string
	rightButtonText: string
}

export default ({
	onPressLeftButton,
	onPressRightButton,
	leftButtonText,
	rightButtonText,
}: Props) => {
	return (
		<View style={styles.panel}>
			<Button onPress={onPressLeftButton} title={leftButtonText} />
			<Button onPress={onPressRightButton} title={rightButtonText} />
		</View>
	)
}

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
})
