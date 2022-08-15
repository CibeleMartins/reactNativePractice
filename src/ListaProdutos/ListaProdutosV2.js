import React from 'react';
import {Text} from 'react-native';
import styles from '../styles/style';

import { FlatList } from 'react-native';

import produtos from './produtos';


export default (props)=> {


     return(



           <>
                <Text
                style={styles.text}>Lista de Produtos V2</Text>
           
                <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({item: p})=> {

                    return <Text>{p.id}) {p.nome} tem preço de R$ {p.preco}</Text>
                }}/>
           
           </>





           )



}
