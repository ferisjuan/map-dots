export interface Coordinate {
	latitude: number
	longitude: number
}

export interface Coordinates {
	coordinate: Coordinate
}

interface Position {
	x: Number
	y: Number
}

export interface LongPressEvent {
	nativeEvent: { coordinate: Coordinate; position: Position }
}

export interface Point {
	name: string
	coordinate: Coordinate
}
