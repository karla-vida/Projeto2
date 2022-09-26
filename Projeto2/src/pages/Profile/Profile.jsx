import { useAuth } from "../../contexts";
import {
  DivProfilePage,
  TitleProfilePage,
  FormProfilePage,
  FieldDiv,
  ButtonProfileEdit,
  ButtonProfileLogout,
} from "./ProfileStyled";

export const Profile = () => {
  const { user, token, loadUserData, handleLogout } = useAuth();

  return (
    <DivProfilePage>
      <FormProfilePage>
        <TitleProfilePage>Meu Perfil</TitleProfilePage>{" "}
        <FieldDiv>
          {user.photoUrl ? (
            <img
              alt="Foto do usuário"
              src={user ? user.photoUrl : ""}
              height={100}
              width={80}
            />
          ) : (
            <p></p>
          )}

          <h2>{user ? user.fullName : ""}</h2>
          <p>{user ? user.email : ""}</p>
          <p>{user ? user.phone : ""}</p>
        </FieldDiv>
        <FieldDiv>
          {user
            ? user.userAddress.zipCode +
              ", " +
              user.userAddress.street +
              ", " +
              user.userAddress.number +
              ", " +
              user.userAddress.neighborhood +
              ", " +
              user.userAddress.city +
              ", " +
              user.userAddress.state
            : ""}
        </FieldDiv>
        <div className="actions">
          <ButtonProfileEdit type="submit">Editar</ButtonProfileEdit>
        </div>
        <div className="actions">
          <ButtonProfileLogout onClick={handleLogout}>Sair</ButtonProfileLogout>
        </div>
      </FormProfilePage>
    </DivProfilePage>
  );
};
