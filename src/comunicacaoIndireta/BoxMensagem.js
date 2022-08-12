import React from 'react'
import {View} from 'react-native'

import styles from '../styles/style'

import ButtonBox from './ButtonBox'

export default (props)=> {


      function display (display) {

            return display
      }

     return(
            <>

                  <View
                  style={styles.boxState}>

                        <ButtonBox
                        funcao={display}/>

                  </View>
            
            </>

      )

}
