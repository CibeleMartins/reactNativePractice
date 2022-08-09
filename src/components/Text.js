import React from "react";

import {Text, StyleSheet} from 'react-native';




export default function ({text}) {

    const styles = StyleSheet.create({

        text: {

            fontSize: 20,
            color: "black",
            fontWeight: "bold"
        }
    })

        return (
        <Text
        style={styles.text}>
            {text}
        </Text>
        )
}