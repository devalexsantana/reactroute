import { Link } from "react-router-dom"
export function Home(){

      return(
        <div>
            <h1>Pagina Home</h1>
            <br />

            <Link to="/sobre">Sobre</Link> <br />

            <Link to="/contato">Contato</Link> <br />

            <Link to="/produto/7">Produto</Link>
        </div>
      )

}