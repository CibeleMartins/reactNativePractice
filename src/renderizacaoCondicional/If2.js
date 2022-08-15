export default (props) => {

    if (props.num == "pode dividir") {

        return props.children
        
    } else {

        return false
    }
}