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
import Estado1 from "./components/Estado1";
import Estado2 from "./components/Estado2";
import FormAccount from "./components/FormAccount";
import Superior from "./comunicacaoDireta/Superior";
import Pai from './comunicacaoIndireta/Pai';
import ContadorV2 from "./comunicacaoDeI/ContadorV2";
import BoxMensagem from "./comunicacaoIndireta/BoxMensagem";


// style
import styles from "./styles/style";





export default function App () {


    return (
        <>
      
        <Header/>
        <View
        style={styles.container}>

        {/* <BoxMensagem/> */}

        {/* <FormAccount/> */}

        <Estado2/>
        </View>
        </>
    )


   
    
}