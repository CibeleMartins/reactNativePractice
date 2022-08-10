import React, {useState} from 'react';

import {View, Button} from 'react-native';

import styles from '../styles/style';


export default () => {

    const [display, setDisplay] = useState('flex')

    const noneFlex = () => {

        if(display === 'none') {

            return  setDisplay('flex')

        } else {

            return  setDisplay('none')
        }

    }

    return (
        <>

        <View
        display={display}
        style={styles.boxState}>
        </View>

        <Button
        onPress={noneFlex}
        title='DISPLAY'/>

        </>
    )
}