import React, {useState} from 'react';
import {Text} from 'react-native';


import ContadorDisplay from './ContadorDisplay';
import Buttons from './ContadorBotoes';
import styles from '../styles/style';



export default (props)=> {

    const [num, setNum] = useState(0)


    const inc = ()=> setNum(num + 1)
    const dec = ()=> setNum(num - 1)


     return(

        <>

            <Text>Contador</Text>
           <ContadorDisplay num={num}/>
           <Buttons inc={inc} dec={dec}/>

        </>

         
    )



}
