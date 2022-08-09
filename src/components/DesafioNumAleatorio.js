import React from 'react';


import { Text } from "react-native";




export default function NumAleatorio(props) {


    const delta = props.num1 - props.num2 + 1

     const aleatorio = parseInt(Math.random() * delta + props.num1)
    
      return (
        
        <Text>O valor aleatório é: {aleatorio}</Text>

      );
    
    
  
}