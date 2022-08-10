import React from 'react';
import { Button } from 'react-native-paper';


import styles from '../styles/style';


export default () => <Button
style={styles.initialBtn}
color= "black" 
mode="contained" 
onPress={() => console.warn('Clicado')}>
For you</Button>