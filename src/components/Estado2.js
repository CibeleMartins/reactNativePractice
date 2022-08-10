import React, {useState} from 'react';

import FirstText from './Text';
import Button from './Button';


import styles from '../styles/style';
import { View, TextInput} from 'react-native';


export default () => {


    const [display, setDisplay] = useState('flex')

    const [display1, setDisplay1] = useState('none')

    const [display2, setDisplay2] = useState('none')


    const changeDisplay = ()=> {

        if(display) {

            setDisplay('none'), setDisplay1('flex')
    }
    }
    const changeDisplay1 = ()=> {

        if(display1) {

            setDisplay('flex'), setDisplay1('none')
    }}


    const showForm = () => {

        if (display1) {

            setDisplay1('none'), setDisplay2('flex')

        }
    }

    const backRegister = () => {

        if (display2) {

            setDisplay1('flex'), setDisplay2('none')

        }
    }

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
                 text="now!"
                 onPress={showForm}/>
                 <Button
                 style={styles.initialBtn}
                 text="back"
                 onPress={changeDisplay1}/>
            </View>


            <View
            style={styles.forms}
            display={display2}>

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
             text="REGISTER"/>
    
                <Button
                 style={styles.initialBtn}
                 text="back"
                 onPress={backRegister}/>
                 
         </View>

               

        </>
    )
}