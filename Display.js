
import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

class Display extends React.Component{
    render(){
        return(<Text>{this.props.number}</Text> );
    }
};
export default Display;