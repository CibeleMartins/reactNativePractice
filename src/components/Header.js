import React from 'react';

import { Appbar} from 'react-native-paper';
import { View, Image} from 'react-native';
import Box from './Box'

import styles from '../styles/style'


export default function Header () {

    return (

        
        <Appbar.Header
        style={styles.header}>
            <Image
            style={styles.boxImg}
            source={require('../assets/logoMax.png')}/>
        </Appbar.Header>
        

    )
}