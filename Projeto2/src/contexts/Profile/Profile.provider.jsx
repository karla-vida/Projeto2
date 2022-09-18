import PropTypes from "prop-types";
import { ProfileContext } from "./Profile.context";
import { useState } from "react";
import { service } from "../../services";

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(service);
  const handleFollow = (id) => {
    const profileUpDated = profile.map((p) =>
      p.id === id ? { ...p, seguindo: !p.seguindo } : p,
    );
    setProfile(profileUpDated);
  };

  return (
    <ProfileContext.Provider value={{ profile, handleFollow }}>
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node,
};
