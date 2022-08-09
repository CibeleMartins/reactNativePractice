import React from "react";

// components
import { View, StyleSheet} from "react-native";
import FirstText from './components/Text';
import {SecondText, SmallText} from './components/Multi';
import TextButton from './components/Multi';
import Box from "./components/Box";

// style
import styles from "./styles/style";


export default function App () {


    return (

        <View
        style={styles.container}>

            <FirstText
            text="Welcome to GreenBank!"/>
            <SecondText
            text="Sustainability in financial life for you!"/>
            <SmallText
            text={<TextButton
            text="Sou um futuro button"/>}/>


            <Box
            style={styles.boxBtn}/>
             
        </View>
        
    )


   
    
}