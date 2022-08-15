import React, {useState} from 'react';

import Text from '../components/Text';
import Button from '../components/Button';

import styles from '../styles/style';

export default ({num1, num2})=> {


    const [operacao, setOperacao] = useState(0)


    function soma () {

        return setOperacao(num1 + num2)
    }



return (


         <>
            {operacao % 2 === 0 ? 
            <Text
            style={styles.text}
            text="O resultado da operacao é par!"></Text> :  <Text
            style={styles.text}
            text="O resultado da operacao é ímpar!"></Text>}
            <Button
            onPress={soma}
            text="Fazer operaçao"/>
         </>

)



}