 import { useContext } from "react";
import { ProfileContext } from "./Profile.context";

export const useProfile = () => {
  const context = useContext(ProfileContext);

  return context;
};
 