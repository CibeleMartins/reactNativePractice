import React from "react";

import { View, StyleSheet} from "react-native";

import FirstText from './components/Text';
import ScrollBox from "./components/ScrollBox";

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

            <ScrollBox>

            <FirstText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E
            xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum."/>

            </ScrollBox>

           

           
        </View>
        
    )


   


    
}