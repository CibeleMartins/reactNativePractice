import React from 'react'
import {View} from 'react-native'


import styles from '../styles/style'

import TextButton from './TextButton'


export default (props)=> {


    function exibeMsg(mensagem){


        const resultado = mensagem
                
        return console.warn(resultado)

    }



     return(

        <>

           <View
           style={styles.boxState}>
           </View>


            <TextButton
            mensagem="A funcao texto foi executada e notificada aqui!"
            funcao={exibeMsg}/>
        </>


           )



}
