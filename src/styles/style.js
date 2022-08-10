import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {

        flexGrow: 1,
        backgroundColor: "#00FF7F",
        display: "flex",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
        

    },

    text: {

        fontSize: 25,
        color: "black",
        fontWeight: "bold"
    },

    textDecor: {
        color:"white",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
        
    },


    boxImg: {
        width: 120,
        height: 50,
    },


    header: {
        backgroundColor: "black",
        justifyContent: "space-between"
       
    },

    initialBtn: {

        marginTop: 20,
        height: 35,
       
    }

})


export default styles