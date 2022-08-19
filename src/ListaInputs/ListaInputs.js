import React from 'react'
import {FlatList, Text, TextInput} from 'react-native'


import styles from '../styles/style'

import If from './If'


export const placeholders = ["Nome", "Senha", "Email", "CPF"]

export default (props)=> {



     return(

            <>
                 <Text>LISTA DE INPUTS</Text>

                 {/* {placeholders.map((p, index) => {

                    return <TextInput
                    key={index}
                    placeholder={p}
                    style={styles.input}/>
                 })} */}


                 <If verificacao={true}>

                 <FlatList
                 data={placeholders}
                 keyExtractor={item => item.index}
                 renderItem={({item:p})=> {

                    return <TextInput
                    style={styles.input}
                    placeholder={p}/>

                 }}
                 />


                 </If>

                 {/* <FlatList
                 data={placeholders}
                 keyExtractor={item => item.index}
                 renderItem={({item:p})=> {

                    return <TextInput
                    style={styles.input}
                    placeholder={p}/>

                 }}
                 /> */}

                
            </>

          





           )



}
