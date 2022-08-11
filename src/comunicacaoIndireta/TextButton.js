import React from 'react'
import {Button, Text} from 'react-native'


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
