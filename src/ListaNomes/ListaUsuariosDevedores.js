import React from 'react';

import { Text } from 'react-native';

import usuarios from './nomes';

import styles from '../styles/style'


export default ()=> {


    function listaUsuarios() {

        return usuarios.map(u => {

            if (u.saldo < 0) {

                return <Text key={u.id}>O usuario {u.nome} possui saldo negativo de {u.saldo} </Text>
            }
        })
    }



return (


         <>

            <Text style={styles.text}>Lista de Usuários Devedores</Text>

            {listaUsuarios()}



         </>

)



}