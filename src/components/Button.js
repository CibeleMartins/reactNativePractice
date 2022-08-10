import React from 'react';
import { Button } from 'react-native-paper';


import styles from '../styles/style';


export default ({text, style, onPress}) => <Button 
style={style}
color= "black" 
mode="contained" 
onPress={onPress}>
{text}</Button>


