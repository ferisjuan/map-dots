import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'

type Props = {
	title: string
	placeholder: string
	onChangeText: (text: string) => void
}

export default ({ title, ...rest }: Props) => {
	return (
		<View style={styles.wrapper}>
			<Text>{title}</Text>
			<TextInput {...rest} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		height: 40,
	},
})
