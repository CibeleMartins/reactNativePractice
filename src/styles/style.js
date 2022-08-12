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
       
    },

    boxState: {
        width: 300,
        height: 300,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width: 200,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 5
    },

    forms: {
        width: 400,
        height: 500,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    boxImage: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
        
    },

    img: {
        width: 200,
        height: 200,
    },

    boxRegistro: {
        width: 350,
        height: 650,
        backgroundColor: 'black',
        borderRadius: 15,
        alignItems: 'center'
    },
    
    textRegister: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: 30
        
    },

    textDadosReg: {

        fontSize: 22,
        fontWeight: '100',
        textAlign: 'center',
        marginTop: 40

    }

})


export default styles