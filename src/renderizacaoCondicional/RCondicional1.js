import React, {useState} from 'react'
import {Text, View, Button} from 'react-native'


export default ({num1, num2})=> {

  
    if (num1 % 2 === 0 || num2 % 2 === 0) {
        
        return <Text>O número é par!</Text>

    } else {

        return <Text>O número é ímpar!</Text>
    }



}
