import React from 'react';

import { Appbar } from 'react-native-paper';
import { View } from 'react-native';

import styles from '../styles/style'


export default function Header () {

    return (

        
        <Appbar.Header
        style={styles.header}>
            <Appbar.Content title="GreenBank" />
            <Appbar.Action icon="magnify"/>
     
        </Appbar.Header>
        

    )
}