import React from 'react'
import {Button, View} from 'react-native'


export default (props)=> {


    function caixa2 (componente) {

        return componente
    }

     return(



           <Button
           title='Ver Componente'

           onPress={function () {
            const resultado = caixa2(props.componente)

            props.funcaoCaixa(resultado)
        }}
           />





           )



}
