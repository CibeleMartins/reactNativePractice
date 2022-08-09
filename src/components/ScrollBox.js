import React from 'react';

import { ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    scrollView: {
        width: "80%",
        height: "50%",
        backgroundColor: 'green',
        marginHorizontal: 20,
      }
   
})

export default ({children}) => <ScrollView style={styles.scrollView}>{children}</ScrollView>