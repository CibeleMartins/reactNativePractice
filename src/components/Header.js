import React from 'react';

import { Appbar} from 'react-native-paper';
import { View, Image} from 'react-native';
import Button from './Button'

import styles from '../styles/style'

export default function Header (props) {

    function implementLogin () {

        return console.warn('Estamos trabalhando nisso ainda, em breve estará pronto.')
    }

    return (

        
        <Appbar.Header
        style={styles.header}>
            <Image
            style={styles.boxImg}
            source={require('../assets/logoMax.png')}/>
            <Button
            text='Sign in'
            onPress={implementLogin}/>
        </Appbar.Header>
        

    )
}