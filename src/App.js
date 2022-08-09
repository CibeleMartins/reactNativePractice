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

// style
import styles from "./styles/style";


export default function App () {


    return (
        <>
        <Header/>

        <View
        style={styles.container}>

            

            <FirstText
            text="Welcome to GreenBank!"/>
            <SecondText
            style={styles.textDecor}
            text="Sustainability in financial life for you!"/>
            {/* <SmallText
            text={<TextButton
            text="Sou um futuro button"/>}/> */}


            
                {/* <NumAleatorio
                num1={30} 
                num2={54}></NumAleatorio>
                */}


                {/* <NomeSobrenome
                nome='Cibele'
                sobrenome='Martins'></NomeSobrenome> */}


            
        </View>
        </>
    )


   
    
}