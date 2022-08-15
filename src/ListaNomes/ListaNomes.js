import React from 'react';

import { Text } from 'react-native';
import nomes from './nomes';
import styles from '../styles/style'

export default ()=> {


    function listaNomes() {

       return nomes.map(n => {
            return <Text key={n.id} style={styles.textDadosReg}>{n.id}) {n.nome} {n.conta}</Text>
        })
    }


    return (


         <>

            <Text style={styles.text}>Lista de Usuários</Text>

            {listaNomes()}


         </>

)



}