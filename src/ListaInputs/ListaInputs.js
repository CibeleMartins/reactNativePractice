import React from 'react'
import {FlatList, Text, TextInput} from 'react-native'


import styles from '../styles/style'

export default (props)=> {

    const placeholders = ["Nome", "Senha", "Email", "CPF"]


     return(

            <>
                 <Text>LISTA DE INPUTS</Text>

                 {/* {placeholders.map((p, index) => {

                    return <TextInput
                    key={index}
                    placeholder={p}
                    style={styles.input}/>
                 })} */}

                 <FlatList
                 data={placeholders}
                 keyExtractor={item => item.index}
                 renderItem={({item:p})=> {

                    return <TextInput
                    style={styles.input}
                    placeholder={p}/>
                 }}
                 />

                
            </>

          





           )



}
