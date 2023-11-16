import { Link } from "react-router-dom"
export function NotFound(){
    return(
        <div>
            <h1>Opss... Essa pagina não existe</h1>
            <br />

            <Link to="/">Voltar para Home</Link>
        </div>
    )
}