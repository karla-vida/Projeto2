import { useProduct } from "../../contexts";
import {
  DivDetails,
  TitleDetails,
  FormDetails,
  FieldDiv,
  ButtonDetailsRemove,
  InfoP,
  InfoLabel,
} from "./DetailsStyled";

export const Details = () => {
  const { product } = useProduct();

  return (
    <DivDetails>
      <FormDetails>
        <TitleDetails>{product.name}</TitleDetails>
        <FieldDiv>
          <InfoP>{product.madeby}</InfoP>
          <img alt="Foto do produto" src={product.photoUrl} height={200} />
          <h2>{product.type}</h2>
        </FieldDiv>

        <FieldDiv>
          <InfoLabel>Informações do Dispositivo</InfoLabel>
          <InfoP>ID Virtual: {product.info.virtual_id}</InfoP>
          <InfoP>Endereço IP: {product.info.ip_address}</InfoP>
          <InfoP>Enderço MAC: {product.info.mac_address}</InfoP>
          <InfoP>Força do sinal: {product.info.signal}</InfoP>
        </FieldDiv>

        <FieldDiv>
          <ButtonDetailsRemove type="submit">Remover</ButtonDetailsRemove>
        </FieldDiv>
      </FormDetails>
    </DivDetails>
  );
};
