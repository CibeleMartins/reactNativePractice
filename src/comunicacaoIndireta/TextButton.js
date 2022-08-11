import React from 'react'
import {Button, Text} from 'react-native'


import styles from '../styles/style'


export default (props)=> {


    function texto (mensagem) {

        return mensagem
    }


     return(



           <Button
           title='Ver Mensagem'
           onPress={function () {

            const resultado = texto(props.mensagem)

            return props.funcao(resultado)
           } 
          
            
        }/>





           )



}
