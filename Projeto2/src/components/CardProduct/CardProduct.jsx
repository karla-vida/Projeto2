import PropTypes from "prop-types";
import { useState } from "react";
import { Modal } from "../Modal";
import {
  CardProductStyled,
  ImgCard,
  InfoCard,
  ProductTitle,
  ButtonCardProduct,
} from "./CardProductStyled";
export const CardProduct = ({ produto, locals }) => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <CardProductStyled>
      <div>
        <div>
          <ImgCard alt="Foto do produto" src={produto.photoUrl} height={200} />
        </div>
        <div>
          <InfoCard>
            <ProductTitle>{produto.name}</ProductTitle>
          </InfoCard>

          <InfoCard>
            <ButtonCardProduct onClick={() => setOpen(true)}>
              Adicionar
            </ButtonCardProduct>
            <Modal
              handleClose={hideModal}
              locals={locals}
              open={open}
              produto={produto}
              setOpen={setOpen}
            ></Modal>
          </InfoCard>
        </div>
      </div>
    </CardProductStyled>
  );
};

CardProduct.propTypes = {
  produto: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    madeBy: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    info: PropTypes.shape({
      virtual_id: PropTypes.string.isRequired,
      ip_address: PropTypes.string.isRequired,
      mac_address: PropTypes.string.isRequired,
      signal: PropTypes.string.isRequired,
    }),
  }),
  locals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};
