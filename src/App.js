import React from "react";

import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({


    container: {

        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between"

    },

    headerAndFooter: {
        width: "100%",
        height: "10%",
        backgroundColor: "black",
    },

   
})


export default function App () {


    return (

        <View
        style={styles.container}>

            <View
            style={styles.headerAndFooter}>

                
            </View>


            <View
            style={styles.headerAndFooter}>

            </View>
        </View>
        
    )


   


    
}