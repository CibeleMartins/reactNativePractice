import React, {useState} from 'react';

import {View, TextInput} from 'react-native';

import FirstText from './Text';
import Button from './Button';

import styles from '../styles/style';


export default (props)=> {


    return (

            <View
            display={props.display}
            style={styles.forms}>

                <FirstText
                text='Be very welcome!'
                style={styles.text}/>

                <FirstText
                style={styles.textDecor}
                text="Follow the steps below to create your account"/> 

                <TextInput
                style={styles.input}
                placeholder="  Name"/>

                <TextInput
                style={styles.input}
                placeholder="  Last Name"/>

                <TextInput
                style={styles.input}
                placeholder="  Identify Document"/>

                <TextInput
                style={styles.input}
                placeholder="  Address"/>

                <TextInput
                style={styles.input}
                placeholder="  E-mail"/>

                <TextInput
                style={styles.input}
                placeholder="  Password"/>

                <Button
                style={{marginTop: 15}}
                text="REGISTER"
                onPress={()=> console.warn("Successfully registered! Log in!")}/>

                <Button
                style={{marginTop: 15}}
                text="Back"
                {...props}/>
                
            </View>

         
        
    )
}