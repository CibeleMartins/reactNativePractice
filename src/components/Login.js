import React from 'react'
import {View, TextInput, Text, Image} from 'react-native'

import styles from '../styles/style'

export default (props)=> {

     return(

           <>

            <View
            display={props.display}
            style={styles.boxLogin}>

                <Image
                source={require('../assets/logoMin.png')}
                style={styles.img}/>

                <Text
                style={styles.textRegister}>Log into your account
                </Text>
               

                <TextInput
                style={styles.input}
                placeholder="E-mail or Id"/>
                <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}/>

            </View>
           
           </>

        )

}
