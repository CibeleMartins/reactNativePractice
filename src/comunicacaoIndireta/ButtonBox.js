import React, {useState} from 'react'
import {View, Image} from 'react-native'

import Button from '../components/Button';
import styles from '../styles/style'


export default (props)=> {


    const [display, setDisplay] = useState('none');


    function verificaDisplay() {

        if(display === 'none') {

            setDisplay('flex')
        } else {

            setDisplay('none')
        }
    }


     return(

         <>

            <View
            display={display}
            style={styles.boxImage}>
                <Image
                style={styles.img}
                source={require('../assets/logoMin.png')}/>
            </View>


            <Button
            text='Display'
            style={styles.initialBtn}
            onPress={function () {
                const resultado = verificaDisplay()
                props.funcao(resultado)
            }}/>
         </>




           )



}
