import React from 'react';

import Text from '../components/Text';

import If from './If'


export default ({usuario = {}})=> {



return (


         <If teste={true}>

            <Text
            text="Usuário logado"/>

            <Text
            text={`Nome: ${usuario.nome} Email: ${usuario.email}`}/>

         </If>

)



}