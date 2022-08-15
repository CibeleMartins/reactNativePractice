import React from 'react';

import Text from '../components/Text';


export default ({nome})=> {


    if(nome.length >= 6) {

        return <Text text="Este nome tem 6 letras ou mais."></Text>

    } else {

        return <Text text="Este nome tem menos de 6 letras."></Text>

    }



}