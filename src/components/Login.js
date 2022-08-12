import React from 'react'
import {View, TextInput, Text} from 'react-native'

import styles from '../styles/style'


export default (props)=> {


     return(

           <>

            <View>

                <Text
                styles={styles.textRegister}>Log into your account
                </Text>

                <TextInput
                style={styles.input}
                placeholder="E-mail or Id"/>
                <TextInput
                placeholder="Password"
                style={styles.input}/>

            </View>
           
           
           
           </>


        )



}
