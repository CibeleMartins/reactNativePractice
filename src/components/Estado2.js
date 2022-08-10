import React, {useState} from 'react';

import FirstText from './Text';
import Button from './Button';


import styles from '../styles/style';
import { View } from 'react-native';


export default () => {


    const [display, setDisplay] = useState('flex')

    const [display1, setDisplay1] = useState('none')


    const changeDisplay = ()=> {

        if(display) {

            setDisplay('none'), setDisplay1('flex')
    }
    }
    const changeDisplay1 = ()=> {

        if(display1) {

            setDisplay('flex'), setDisplay1('none')
    }}

    return (

        <>

            <View
            display={display}>
                <FirstText
                text="Welcome to GreenBank!"
                style={styles.text}/>
                <FirstText
                style={styles.textDecor}
                text="Sustainability in financial life"/> 
                <Button
                style={styles.initialBtn}
                text="For You"
                onPress={changeDisplay}/>
            </View>

            <View
             display={display1}>
                <FirstText
                text="Create account"
                style={styles.text}/>
                <Button
                 style={styles.initialBtn}
                 text="now!"/>
                 <Button
                 style={styles.initialBtn}
                 text="back"
                 onPress={changeDisplay1}/>
            </View>

        </>
    )
}