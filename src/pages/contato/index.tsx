import { Link } from "react-router-dom";

export function Contato(){
    return(

        <>
        <h1>Pagina Contato</h1>

        <hr/>
        <Link to="/sobre">Sobre</Link> <br />

        <Link to="/">Home</Link>

        </>
        
    )
}