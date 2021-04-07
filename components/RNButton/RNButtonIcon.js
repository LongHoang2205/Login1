import React, { Component } from 'react';
import {View,Button,Text,TouchableHighlight,Image} from 'react-native';
import styles from '../RNButton/StyleButton';


class RNButtonIcon extends Component {
    render() {
        const {hinh}=this.props
        return (
                <TouchableHighlight >
                         <Image source={hinh} style={styles.image} />
                </TouchableHighlight>
                         

        );
    }
}

export default RNButtonIcon;