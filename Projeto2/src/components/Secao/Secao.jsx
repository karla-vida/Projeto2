import PropTypes from "prop-types";
import { ListaCards } from "../ListaCards";

export const Secao = ({ nome, produtos }) => {
  return (
    <div>
      <div>
        <h2>{nome}</h2>
        <hr />
      </div>
      <ListaCards produtos={produtos} />
    </div>
  );
};

Secao.propTypes = {
  nome: PropTypes.string.isRequired,
  produtos: PropTypes.array.isRequired,
};
