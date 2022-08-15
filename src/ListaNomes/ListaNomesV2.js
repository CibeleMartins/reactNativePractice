import React from 'react'
import {Text, FlatList} from 'react-native'


import styles from '../styles/style'
import nomes from './nomes'

export default (props)=> {


    function tamanhoNome({item: n}) {


       const verifica = n.nome.length > 15 ? <Text>{n.nome}</Text> : false

       return verifica
        
    }


     return(


            <>

                <Text style={styles.text}>Lista Nomes V2</Text>

                <FlatList
                data={nomes}
                keyExtractor={i => i.id}
                renderItem={tamanhoNome}/>


            
            </>
          




           )



}
