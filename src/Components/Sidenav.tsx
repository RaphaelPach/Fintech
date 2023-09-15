import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webHooks from "../assets/icons/webhooks.svg";
import config from "../assets/icons/configuracoes.svg";
import contato from "../assets//icons/contato.svg";
import sair from "../assets//icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
        <ul>
          <li>
              <span>
                <img src={resumo}></img>
              </span>
            <NavLink to="/">Resumo</NavLink>
          </li>
          <li>
              <span>
                <img src={vendas}></img>
              </span>
              <NavLink to="/vendas">Vendas</NavLink>
          </li>
          <li>
              <span>
                <img src={webHooks}></img>
              </span>
                <a>WebHooks</a>
          </li>
          <li>
              <span>
                <img src={config}></img>
              </span>
                <a>Configurações</a>
          </li>
          <li>
              <span>
                <img src={contato}></img>
              </span>
              <a>Contato</a>
          </li>
          <li>
              <span>
                <img src={sair}></img>
              </span>
                <a>Sair</a>
          </li>
        </ul>
    </nav>
  )
}

export default Sidenav