import { placeholders } from "./ListaInputs"

export default (props) => {

    if (placeholders.length > 2) {

        return props.children

    } else {
        
        return false
    }
}