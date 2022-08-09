import React from 'react';


import { Text } from "react-native";




export default function NomeSobrenome(props) {


    const nomeSobrenome = props.nome + ' ' + props.sobrenome
    
    const eMaior = props.nome.length < 5 ? console.warn('O nome tem menos de 5 letras') : console.warn('O nome tem mais de 5 letras')
    
      return (
        
        <Text>O nome e o sobrenome é: {nomeSobrenome} </Text>

      );
    
    
  
}