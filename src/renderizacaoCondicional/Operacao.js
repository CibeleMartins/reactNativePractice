import React, {useState} from 'react';

import { Text, Button } from 'react-native';

import If2 from './If2';


export default ({num1, num2})=> {


    const [divisao, setDivisao] = useState()


    function divide() {

        return setDivisao(num1 / num2)
    }


return (


         <If2 num="pode dividir">

            <Text>{divisao}</Text>
            <Button
            title='Divide'
            onPress={divide}
            />


         </If2>

)



}