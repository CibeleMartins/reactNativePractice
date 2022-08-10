import React from "react";

import {Text, StyleSheet} from 'react-native';




export default function ({text, style}) {

        return (
        <Text
        style={style}>
            {text}
        </Text>
        )
}