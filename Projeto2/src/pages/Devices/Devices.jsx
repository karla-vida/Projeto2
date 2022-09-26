import { ListaCards } from "../../components";
import { useAuth, useProduct } from "../../contexts";
import { useDevices, useLocals } from "../../hooks";
import {
  Div,
  Input,
  TitleDevices,
  LabelDevices,
} from "./DevicesStyled";

export const Devices = () => {
  const {
    isSelecionado,
    handleSelecionar,
    listAllDevices,
    setBuscaTexto,
    buscaTexto,
    buscaProduto,
  } = useDevices();
  const { authenticated, user, handleLogin } = useAuth();

  const { listLocals } = useLocals();
  return (
    <>
      <Div>
        <TitleDevices>Dispositivos</TitleDevices>
      </Div>

      <Div>
        <LabelDevices htmlFor="dispositivo">
          Digite no campo para buscar o dispositivo
        </LabelDevices>
      </Div>

      <Div>
        <Input
          type="text"
          placeholder=""
          id="dispositivo"
          onChange={(e) => {
            buscaProduto(e.target.value);
          }}
        />
      </Div>

      <Div>
        <ListaCards locals={listLocals} produtos={listAllDevices} />
      </Div>
    </>
  );
};
