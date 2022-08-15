
import React from 'react';

import { Text } from 'react-native';

import styles from '../styles/style';
import produtos from './produtos';



export default ()=> {



return (


         <>
            <Text
            style={styles.text}>Lista de Produtos</Text>

            {produtos.map(p => {

                return <Text key={p.id} style={styles.textDadosReg}>
                    {p.id}) {p.nome} tem preço de R$ {p.preco}
                </Text>
            } )}

         </>

)



}