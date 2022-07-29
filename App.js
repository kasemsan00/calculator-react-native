import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput  } from 'react-native';
import NumpadButton from './NumpadButton';

let displayMaxLength = 10;

export default function App() {

	const [displayResult, setDisplayResult] = useState(0);
	const [indicator, setIndicator] = useState('');

	const [numberStack, setNumberStack] = useState([]);

	const onPressHandler = (value) => {
		if(displayResult.toString().length <= displayMaxLength ){
			if(indicator !== '' && numberStack[numberStack.length-1] !== undefined){
				setDisplayResult(value)
			}else{
				setDisplayResult(Math.abs(displayResult + '' + value));
			}
		}
	}

	const onPressIndicator = (indicator) => {
		setIndicator(indicator)
		setNumberStack(numberStack => [...numberStack, displayResult]);
	}
	
	const onPressResult = () => {

		let storeNumber = numberStack[numberStack.length-1];
			storeNumber = parseFloat(storeNumber)
		let result = null;
		switch (indicator) {
			case 'x' :
				result = storeNumber * displayResult;
				break;
			case '+' :
				result = storeNumber + displayResult;
				break;
			case '-' : 
				result = storeNumber - displayResult;
				break;
			case '÷' :
				result = storeNumber / displayResult;
				break;
			default:
				break;
		}
		
		if(result.toString().length > displayMaxLength){
			result = result.toFixed(displayMaxLength)
		}
		setDisplayResult(result)
	}

	const onPressAbs = () => {
		if(displayResult > 0){
			setDisplayResult(-Math.abs(displayResult))
		}else{
			setDisplayResult(Math.abs(displayResult))
		}
	}
	const onPressDot = () => {
		setDisplayResult((displayResult + '.'))
	}
	const onPressAllClean = () => {
		setNumberStack([]);
		setIndicator('');
		setDisplayResult(0);
	}

	return (
		<View style={styles.container}>
			<View style={styles.displayPanel} >
				<Text style={styles.displayText} >{displayResult}</Text>
			</View>
			<View style={styles.pad}>
				<NumpadButton text="AC" color='#e0e0e0' onPressHandler={onPressAllClean} />
				<NumpadButton text="+/-" color='#e0e0e0' onPressHandler={onPressAbs} />
				<NumpadButton text="%" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="÷" color='#e2a748' onPressHandler={onPressIndicator} />
			</View>
			<View style={styles.pad}>
				<NumpadButton text="7" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="8" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="9" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="x" color='#e2a748' onPressHandler={onPressIndicator} />
			</View>
			<View style={styles.pad}>
				<NumpadButton text="4" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="5" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="6" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="-" color='#e2a748' onPressHandler={onPressIndicator} />
			</View>
			<View style={styles.pad}>
				<NumpadButton text="1" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="2" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="3" color='#e0e0e0' onPressHandler={onPressHandler} />
				<NumpadButton text="+" color='#e2a748' onPressHandler={onPressIndicator} />
			</View>
			<View style={styles.pad}>
				<NumpadButton text="0" color='#e0e0e0' onPressHandler={onPressHandler} flex={2} style={{paddingRight : 0.5}} />
				<NumpadButton text="." color='#e0e0e0' onPressHandler={onPressDot} />
				<NumpadButton text="=" color='#e2a748' onPressHandler={onPressResult} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#858693'
	},
	displayPanel: {
		flex: 3,
		margin: 10,
		alignSelf: 'flex-end',
		justifyContent: 'flex-end',
	},
	displayText: {
		fontSize: 50,
		color: 'white',
		textAlign: 'center',
	},
	pad: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'black',
		flexDirection: 'row',
	}
});
