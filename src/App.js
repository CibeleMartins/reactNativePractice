import React from "react";

// components
import { View, StyleSheet} from "react-native";
import FirstText from './components/Text';
import {SecondText, SmallText} from './components/Multi';
import TextButton from './components/Multi';
import Box from "./components/Box";
import NumAleatorio from "./components/DesafioNumAleatorio";
import NomeSobrenome from "./components/nomeSobrenome";
import Header from "./components/Header";
import ButtonReactN from "./components/ButtonReactN";
import Contador from "./components/Contador";

import Btn from './components/Button'

// style
import styles from "./styles/style";


export default function App () {


    return (
        <>
        <Header/>

        <View
        style={styles.container}>

            

            {/* <FirstText
            text="Welcome to GreenBank!"
            style={styles.text}/>
            <FirstText
            style={styles.textDecor}
            text="Sustainability in financial life"/> */}
            {/* <SmallText
            text={<TextButton
            text="Sou um futuro button"/>}/> */}
            {/* <Btn
            style={styles.initialBtn}
            text="For You"
            onPress={()=> console.warn("onPress passado por props com sucesso")}/> */}

            
                {/* <NumAleatorio
                num1={30} 
                num2={54}></NumAleatorio>
                */}


                {/* <NomeSobrenome
                nome='Cibele'
                sobrenome='Martins'></NomeSobrenome> */}


                <Contador
                inicial={0}/>


            
        </View>
        </>
    )


   
    
}