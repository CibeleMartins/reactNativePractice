import React from 'react'
import {Text} from 'react-native'
import Filho from './Filho'



export default (props)=> {


    function notificaValor (valor) {

        return console.warn(valor)
    }


     return(



           <Filho
           min={2000}
           max={3050}
           funcao={notificaValor}/>





           )



}
