import React, {useState}from "react";

// components
import { View, StyleSheet, Text, FlatList} from "react-native";
import FirstText from './components/Text';
import {SecondText, SmallText} from './components/Multi';
import TextButton from './components/Multi';
import Box from "./components/Box";
import NumAleatorio from "./components/DesafioNumAleatorio";
import NomeSobrenome from "./components/nomeSobrenome";
import Header from "./components/Header";
import ButtonReactN from "./components/ButtonReactN";
import Contador from "./components/Contador";
import Btn from './components/Button'
import Estado1 from "./components/Estado1";
import Estado2 from "./components/Estado2";
import FormAccount from "./components/FormAccount";
import Superior from "./comunicacaoDireta/Superior";
import Pai from './comunicacaoIndireta/Pai';
import ContadorV2 from "./comunicacaoDeI/ContadorV2";
import BoxMensagem from "./comunicacaoIndireta/BoxMensagem";


// style
import styles from "./styles/style";
import Login from "./components/Login";
import RCondicional from "./renderizacaoCondicional/RCondicional";
import RCondicional1 from "./renderizacaoCondicional/RCondicional1";

import RCondicional2 from "./renderizacaoCondicional/RCondicional2";
import Usuario from './renderizacaoCondicional/Usuario';
import Operacao from "./renderizacaoCondicional/Operacao";
import ListaProdutos from "./ListaProdutos/ListaProdutos";
import ListaNomes from "./ListaNomes/ListaNomes";
import ListaUsuariosDevedores from "./ListaNomes/ListaUsuariosDevedores";
import ListaProdutosV2 from "./ListaProdutos/ListaProdutosV2";
import ListaNomesV2 from "./ListaNomes/ListaNomesV2";
import If from "./renderizacaoCondicional/If";
import api from "./services/Api";


export default function App () {

    const [pokemons, setPokemons] = useState([])

    async function pegaPokemons () {

        const response = await api.get('pokemon?limit=20')

        const {data} = response

        return setPokemons(data)

        
    }

    pegaPokemons()
    console.warn(pokemons)



    return (
        <>
      
        <Header/>
            <View
            style={styles.container}>

            {/* <BoxMensagem/> */}

            {/* <Estado2/> */}

                {/* <Login/> */}

                {/* <RCondicional2
                num1={3} num2={0}/> */}

                {/* <Usuario
                usuario={{nome: 'Josh', email: 'joshcallfmann@hotmail.com'}}/> */}
             
                     {/* {pokemons.results.map((p)=> {

                       return <>

                        <Text style={styles.text}>{p.name}</Text>
                        
                       </>
                    })} */}

                    <If teste={pokemons.results}>

                         <FlatList
                            data={pokemons.results}
                            keyExtractor={ i => i.name}
                            renderItem={({item: p})=> {

                        return <Text>{p.name}</Text>
                    }}/>
                    </If>

                   

            </View>
        </>
    )


   
    
}