import React, {useState} from "react";

import api from '../services/Api';

import {Text, Image, Button} from 'react-native';

import styles from "../styles/style";



export default ()=> {

    const [pokemons, setPokemons] = useState([])

    async function pegaPokemons () {

        const response = await api.get('pokemon?limit=3')

        const {data} = response

        const [habilidades] = data.abilities


        return setPokemons(habilidades), console.warn(pokemons)

        
    }

    pegaPokemons()

 

    return (


            <>


                <Text style={styles.text}>Lista de Pokemons!!</Text>

                    {pokemons.ability.map(p => {
                        <Text key={p.name}></Text>
                    })}
                {/* <Button
                onPress={pegaPokemons}
                title="Ver Pokemon"/> */}
            

            </>

    )



}