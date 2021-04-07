import React, { Component } from 'react';
import {Text,TouchableOpacity,View} from 'react-native';


class RNButtonOpacity extends Component{
    render(){
        const { nameOfButton}= this.props
        return(
                <TouchableOpacity >
                <Text style={{fontSize:16,color:'#530054'}}> {nameOfButton}</Text>
                </TouchableOpacity>   
        );
    }
}
export default RNButtonOpacity;