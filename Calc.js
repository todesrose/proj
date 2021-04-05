import React from 'react';
import Display from './Display';
import { connect } from 'react-redux';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

class Calc extends React.Component{
   
    render(){
        return(<><Display number = {this.props.display_number} /> 
        <Button  onPress={this.props.increaseNumber}  title="+"  />
        <Button onPress={this.props.decreaseNumber}title="-"/></>) ;  
    }

}

function mapStateToProps(state) { 
    return { 
        display_number: state.displayReducer.number
    }; 
} 
function mapDispatchToProps(dispatch) { 
    return({ 
        increaseNumber() { 
            dispatch({ 
                type: "INCREASE_DISPLAY_NUMBER", 
            }); 
        }, 
        decreaseNumber() { 
            dispatch({ 
                type: "DECREASE_DISPLAY_NUMBER", 
            }); 
        } 
    }) 
} 
 
export default Calc = connect( 
    mapStateToProps, mapDispatchToProps)( 
    Calc 
)
