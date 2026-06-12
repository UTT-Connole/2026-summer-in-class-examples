import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import {useColor} from '@/contexts/colorContext';

export default function Raindbow() {

    const {color, setColor} = useColor();
	return (
		<View style={styles.container}>
            <Text>{color}</Text>
			<View style={{...styles.box, backgroundColor: color}} />
            <Pressable onPress={() => setColor('red')}>
                <Text>Red</Text>
            </Pressable>
            <Pressable onPress={() => setColor('green')}>
                <Text>Green</Text>
            </Pressable>
            <Pressable onPress={() => setColor('blue')}>
                <Text>Blue</Text>
            </Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	box: {
		width: 160,
		height: 160,
		backgroundColor: 'blue',
		borderRadius: 12,
	},
});
