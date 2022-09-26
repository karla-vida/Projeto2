import { useAuth, useProduct } from "../../contexts";
import {
  DivHome,
  DivWeather,
  DivFilter,
  DivCards,
  ButtonFilter,
} from "./HomeStyled";
import { useDevices } from "./../../hooks";
import { Weather, ListaCards } from "../../components";
import { useEffect } from "react";
export const Home = () => {
  const { handleAutorizado, user, token } = useAuth();
  const { listLocals } = useDevices();

  const { listDeviceUser, setListDeviceUser, queryDeviceUser } = useProduct();

  useEffect(() => {
    console.log("entrou no effect de home" + token);
    const data = queryDeviceUser().then((result) => {
      setListDeviceUser(result);
      console.log("devices" + listDeviceUser);
    });
    // console.log("devices" + listDeviceUser);
  }, []);

  return (
    <DivHome>
      <DivWeather>
        <Weather></Weather>
      </DivWeather>
      <DivFilter>
        <ButtonFilter> Todos </ButtonFilter>
        <ButtonFilter> Casa </ButtonFilter>
        <ButtonFilter> Escritório </ButtonFilter>
      </DivFilter>

      <DivCards>
        {listDeviceUser ? (
          <ListaCards locals={listLocals} produtosFiltrados={listDeviceUser} />
        ) : (
          <p> Sem produtos associados</p>
        )}
      </DivCards>
    </DivHome>
  );
};

export default Home;
