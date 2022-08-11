import React from 'react'
import Button from '../components/Button'

import styles from '../styles/style'

export default (props)=> {


     return(


        <>

            <Button style={styles.initialBtn}  text='+'onPress={props.inc}/>
            <Button style={styles.initialBtn} text='-'onPress={props.dec}/>

        </>
     
        )



}
