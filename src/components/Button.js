import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-dom';

const styles = StyleSheet.create({
    button: {
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor: '#f0f0f0',
        textAling: 'center',
        borderWidth:1,
        borderColor: '#888888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const styleButton = [styles.button]
    if(props.double) styleButton.push(styles.buttonDouble)
    if(props.triple) styleButton.push(styles.buttonTriple)
    if(props.operation) styleButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}