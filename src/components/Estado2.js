import React, {useState} from 'react';

import FirstText from './Text';
import Button from './Button';
import FormAccount from './FormAccount';
import Box from './Box';


import styles from '../styles/style';
import { View, Text} from 'react-native';


export default (props) => {


    const [display, setDisplay] = useState('flex')

    const [display1, setDisplay1] = useState('none')

    const [display2, setDisplay2] = useState('none')

    const [estadosDeRegistro, setEstadosReg] = useState([])


    const [viewRegistros, setViewReg] = useState('none')


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



    function exibeEstados(estados) {

        const resultado = estados

        return setEstadosReg(resultado), setDisplay2('none'), setViewReg('flex')
      
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

            <FormAccount
            display={display2}
            onPress={backRegister}
            funcao={exibeEstados}/>     


            <Box
            style={styles.boxRegistro}
            display={viewRegistros}>

                <Text
                style={[styles.textDecor, styles.textRegister]}>Account created successfully!</Text>

                {estadosDeRegistro.map((item, index)=> {
                    
                    return <Text
                    style={[styles.textDecor, styles.textDadosReg]}
                    key={index}>{item}</Text>
                })}
            
            </Box>

                
        </>
    )
}