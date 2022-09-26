import PropTypes from "prop-types";
import { CardProduct } from "../CardProduct";
import { CardHome } from "../CardHome";
import { Li, Ul } from "./ListaCardsStyled";

export const ListaCards = ({ produtos, locals, produtosFiltrados }) => {
  return (
    <>
      {produtos ? (
        <Ul>
          {produtos.map((produto) => (
            <Li key={produto._id}>
              <CardProduct locals={locals} produto={produto} />
            </Li>
          ))}
        </Ul>
      ) : (
        <div>
          {produtosFiltrados ? (
            <Ul>
              {produtosFiltrados.map((produto) => (
                <Li key={produto._id}>
                  <CardHome locals={locals} produto={produto} />
                </Li>
              ))}
            </Ul>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      madeBy: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    }),
  ),
  locals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
  produtosFiltrados: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      madeBy: PropTypes.string,
      photoUrl: PropTypes.string,
    }),
  ),
};
