import React from 'react'
import {Text, View} from 'react-native'

import Inferior1 from './Inferior1'

export default (props)=> {

     return(



          <View>
          
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
            <Inferior1 {...props}/>
          
          </View>        
          
        )
}
