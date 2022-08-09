import React from "react";

import { View, StyleSheet} from "react-native";

import FirstText from './components/Text';
import {SecondText, SmallText} from './components/Multi';

import TextButton from './components/Multi';


const styles = StyleSheet.create({


    container: {

        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between"

    }
   
})


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
          

            

           

           
        </View>
        
    )


   


    
}