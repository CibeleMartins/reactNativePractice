import React, {useState} from 'react';

import {Text, Button} from 'react-native';


// Dessa maneira, é até possível realmente incrementar mais um numero
// No entanto, isso nao pode ser visualizado na interface gráfica o
// as alteracoes

// export default (props) => {

//     let numero = props.inicial 

//     let inc = () => {
//         numero++
//         console.warn(numero)
//     }
//     let dec = () => numero--

//     return (
//         <>

//             <Text>{numero}</Text>
//             <Button
//             title='+'
//             onPress={inc}/>
//             <Button
//             title='-'
//             onPress={dec}/>


//         </>
//     )
// }


export default (props) => {

    const [numero, setValor] = useState(props.inicial)

    const inc = () => setValor(numero + 1)
    const dec = () => setValor(numero - 1)

    return (

        <>
            <Text>{numero}</Text>
            <Button
            title='+'
            onPress={inc}></Button>
            <Button
            title='-'
            onPress={dec}></Button>
        </>
    )
}

// Dessa maneira, o elemento no qual ocorrerá a mudanca na interface grafica
// recebe um estado inicial
// é criado um estado a partir do useState, que basicammente recebe um valor
// inicial e retorna um array com este valor e uma funcao responsavel por
// altera-lo
// na propriedade onPress as funcoes de incremento e decremento estao ali
// mas estas funcoes nao estao mais incrementando e mostrando no console.warn
// e sim, setando o valor inicial do estado do texto, que e definido na props
// da instancia do componente
// isso ocorre atraves de uma funcao que executa um novo estado apos
// cada click