import React from 'react'
import {Button} from 'react-native'



export default (props)=> {


    function geraValor(min, max) {

        const valor = max - min + 1

        return parseInt(Math.random() * valor) + min
    }


     return(

           <Button
           title='Fazer Operação'
           onPress={()=> {
            const resultado = geraValor(props.min, props.max)
            props.funcao(resultado)
           }}/>


           )



}
