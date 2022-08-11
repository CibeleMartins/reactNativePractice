import React, {useState} from 'react'
import {View, Text} from 'react-native'


import styles from '../styles/style'

import TextButton from './TextButton'
import Caixa2 from './Caixa2'


export default (props)=> {


  

    function exibeMsg(mensagem){

        const resultado = mensagem
                
        return setMsg(resultado)

    }

    const [mensagem, setMsg] = useState('')


     return(

        <>

           <View
           style={styles.boxState}>
            <Text>{mensagem}</Text>
           </View>

            <TextButton
            mensagem="A funcao texto foi executada e notificada aqui!"
            funcao={exibeMsg}/>
        </>


           )



}
