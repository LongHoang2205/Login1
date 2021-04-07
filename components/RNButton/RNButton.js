import React, { Component } from 'react';
import {View,Button,Text,TouchableHighlight} from 'react-native';
import styles from '../RNButton/StyleButton';


class RNButton extends Component {
    render() {
        return (
            <View >
                    <View style={styles.signIn}>
                         <TouchableHighlight  style={styles.button}>
                            <Text style={styles.txt}>SIGN IN</Text>
                         </TouchableHighlight>
                    </View>
            </View>
        );
    }
}

export default RNButton;