import React from 'react';

import { Button } from 'react-native';


export default function ButtonReactN () {


    function click() {

        return console.warn('Estamos em manutencao')
    }

    return (

        <Button
        title='More'
        onPress={click}/>
    )
}