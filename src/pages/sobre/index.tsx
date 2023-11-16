import { Link } from "react-router-dom"
export function Sobre(){
    return(
        <div>
            <h1>Pagina sobre</h1>
            <br/>

            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}