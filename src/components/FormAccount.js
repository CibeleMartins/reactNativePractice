import React, {useState} from 'react';

import {View, TextInput} from 'react-native';

import FirstText from './Text';
import Button from './Button';

import styles from '../styles/style';
import { useTheme } from 'react-native-paper';


export default (props)=> {


    const [userName, setUserName] = useState('')
    const [lastName, setLastName] = useState('')
    const [id, setId] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function retornaEstados () {


        const estados = [userName, lastName, id, address, email, password]

        return estados
    }


    // console.warn(userName, lastName, id, address, email, password)

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
                placeholder="  Name"
                value={userName}
                onChangeText={setUserName}
                />

                <TextInput
                style={styles.input}
                placeholder="  Last Name"
                value={lastName}
                onChangeText={setLastName}/>

                <TextInput
                style={styles.input}
                placeholder="  Identify Document"
                value={id}
                onChangeText={setId}/>

                <TextInput
                style={styles.input}
                placeholder="  Address"
                value={address}
                onChangeText={setAddress}/>

                <TextInput
                style={styles.input}
                placeholder="  E-mail"
                value={email}
                onChangeText={setEmail}/>

                <TextInput
                style={styles.input}
                placeholder="  Password"
                value={password}
                onChangeText={setPassword}/>

                <Button
                style={{marginTop: 15}}
                text="REGISTER"
                onPress={function () {
                    const estadosResultados = retornaEstados()
                    props.funcao(estadosResultados)
                }}/>

                <Button
                style={{marginTop: 15}}
                text="Back"
                {...props}/>
                
            </View>

         
        
    )
}