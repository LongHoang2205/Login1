import React, { Component } from 'react';
import {View, TextInput} from 'react-native';
import styles from './StyleTextInput';

class RNTextInput extends Component{
    render(){
        const {placeholder}=this.props
        return(
            <View style={styles.container}> 
               <TextInput placeholder={placeholder}  placeholderTextColor="#530054"  style={styles.textInput}>
                </TextInput>         
            </View>
        )
    }
}
export default RNTextInput;