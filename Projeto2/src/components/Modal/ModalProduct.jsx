import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import {
  TitleDetails,
  FormDetails,
  FieldDiv,
  ButtonDetailsRemove,
  InfoP,
  InfoLabel,
  Model,
} from "./ModalProductStyled";

export const ModalProduct = ({
  produto,
  open,
  locals,
  handleClose,
  setOpen,
}) => {
  const sendNo = () => handleClose(false);
  const sendYes = () => handleClose(true);
  const { token, user, authenticated } = useAuth();
  const navigator = useNavigate();
  const [local, setLocal] = useState("");
  const [comodo, setComodo] = useState("");
  const confirmar = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Model show={open}>
          <FormDetails onSubmit={confirmar}>
            <TitleDetails>{produto.device.name}</TitleDetails>
            <FieldDiv>
              <InfoP>{produto.device.madeBy}</InfoP>
              <img
                alt="Foto do produto"
                src={produto.device.photoUrl}
                height={200}
              />

              <InfoP>{produto.device.type}</InfoP>
            </FieldDiv>

            <FieldDiv>
              <InfoLabel>Informações do Dispositivo</InfoLabel>
              <InfoP>ID Virtual: {produto.device.info.virtual_id}</InfoP>
              <InfoP>Endereço IP: {produto.device.info.ip_address}</InfoP>
              <InfoP>Enderço MAC: {produto.device.info.mac_address}</InfoP>
              <InfoP>Força do sinal: {produto.device.info.signal}</InfoP>
            </FieldDiv>

            <ButtonDetailsRemove type="submit"> Remover</ButtonDetailsRemove>
          </FormDetails>
        </Model>
      ) : (
        <p></p>
      )}
    </>
  );
};
ModalProduct.propTypes = {
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
  open: PropTypes.bool,
  onClose: PropTypes.bool,
  locals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
  handleClose: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
