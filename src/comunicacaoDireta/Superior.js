import React from 'react'
import {View} from 'react-native'


import Inferior from './Inferior'


import styles from '../styles/style'


export default ()=> {


    let x= 100
    let y= 200


     return(


           <>
           <View
           style={styles.boxState}>

                <Inferior a={x} b={y} deuCerto={100}/>
           </View>
           </>


        )

}
