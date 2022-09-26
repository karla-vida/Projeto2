import PropTypes from "prop-types";
import { useState } from "react";
import { ModalProduct } from "../Modal/ModalProduct";
import {
  CardHomeStyled,
  ImgCard,
  InfoCard,
  ProductTitle,
  DivStyled,
} from "./CardHomeStyled";
export const CardHome = ({ produto, locals }) => {
  const [open, setOpen] = useState(false);
  const [selectModal, setSelectModal] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  const confirmar = (arg) => {
    hideModal();
  };

  return (
    <CardHomeStyled onClick={() => setOpen(true)}>
      <DivStyled>
        <div>
          <ImgCard
            alt="Foto do produto"
            src={produto.device.photoUrl}
            height={50}
          />
        </div>
        <div>
          <InfoCard>
            <ProductTitle>{produto.device.name}</ProductTitle>
          </InfoCard>
          <InfoCard>
            <p>
              {" "}
              {produto.local.description} | {produto.room} |{" "}
              {produto.is_on ? "ON" : "OFF"}
            </p>
          </InfoCard>
          <InfoCard>
            <ModalProduct
              handleClose={hideModal}
              locals={locals}
              open={open}
              produto={produto}
              setOpen={setOpen}
            ></ModalProduct>
          </InfoCard>
        </div>
      </DivStyled>
    </CardHomeStyled>
  );
};

CardHome.propTypes = {
  produto: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    device: PropTypes.shape({
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
    is_on: PropTypes.bool.isRequired,
    room: PropTypes.string.isRequired,
    local: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),

  locals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};
