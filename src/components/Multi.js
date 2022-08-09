import React from "react";

import { Text} from "react-native";


export function SecondText ({text, style}) {

    return (

        <Text
        style={style}>{text}</Text>
    )
}

export default function ThreeText ({text}) {

    return (

        <Text>{text}</Text>
    )
}

function SmallText ({text}) {

    return (

        <Text>{text}</Text>
    )

}


export {SmallText}