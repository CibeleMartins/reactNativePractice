import React from "react";

import {Text, StyleSheet} from 'react-native';




export default function ({text}) {

    const styles = StyleSheet.create({

        text: {
            fontSize: 50
        }
    })

        return (
        <Text
        style={styles.text}>
            {text}
        </Text>
        )
}