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
import Login from "./components/Login";
import RCondicional from "./renderizacaoCondicional/RCondicional";
import RCondicional1 from "./renderizacaoCondicional/RCondicional1";

import RCondicional2 from "./renderizacaoCondicional/RCondicional2";
import Usuario from './renderizacaoCondicional/Usuario';
import Operacao from "./renderizacaoCondicional/Operacao";


export default function App () {


    return (
        <>
      
        <Header/>
        <View
        style={styles.container}>

        {/* <BoxMensagem/> */}

        {/* <Estado2/> */}

            {/* <Login/> */}

            {/* <RCondicional2
            num1={3} num2={0}/> */}

            {/* <Usuario
            usuario={{nome: 'Josh', email: 'joshcallfmann@hotmail.com'}}/> */}

            <Operacao num1={50} num2={2}/>
           

        </View>
        </>
    )


   
    
}