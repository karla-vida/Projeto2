import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useProduct } from "../../contexts";
import {
  LabelModal,
  Model,
  SelectLocal,
  Option,
  DivModal,
  ButtonModalConfirm,
  ButtonModalCancel,
  InputModal,
  DivButton,
  ProductTitle,
} from "./ModalStyled";

export const Modal = ({ produto, open, locals, handleClose, setOpen }) => {
  const sendNo = () => handleClose(false);
  const sendYes = () => handleClose(true);
  const { token, user, authenticated } = useAuth();
  const navigator = useNavigate();
  const [local, setLocal] = useState("");
  const [comodo, setComodo] = useState("");
  const { product, setProduct, addProductUser } = useProduct();
  const confirmar = (e) => {
    e.preventDefault();
    setProduct(produto);
    addProductUser(produto._id, local, comodo);
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Model show={open}>
          <form onSubmit={confirmar}>
            <DivModal>
              <ProductTitle> {produto.name} </ProductTitle>
            </DivModal>

            <DivModal>
              <LabelModal> Local* </LabelModal>
              <SelectLocal
                onChange={(e) => setLocal(e.target.value)}
                placeholder="Selecione o local"
              >
                {locals.map((local) => (
                  <Option key={local._id} value={local._id}>
                    {" "}
                    {local.description}{" "}
                  </Option>
                ))}
              </SelectLocal>

              <DivModal>
                <LabelModal> Cômodo* </LabelModal>
                <InputModal
                  placeholder="Digite o nome do cômodo"
                  onChange={(e) => setComodo(e.target.value)}
                ></InputModal>
              </DivModal>
            </DivModal>

            <DivButton>
              <ButtonModalConfirm type="submit"> Confirmar</ButtonModalConfirm>

              <ButtonModalCancel
                type="reset"
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              >
                {" "}
                Cancelar
              </ButtonModalCancel>
            </DivButton>
          </form>
        </Model>
      ) : null}
    </>
  );
};
Modal.propTypes = {
  produto: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    madeBy: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
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
