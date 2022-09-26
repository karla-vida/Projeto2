import PropTypes from "prop-types";
import { ProfileContext } from "./Profile.context";
import { useState } from "react";
import { service } from "../../services";

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(service);
  const handleProfile = (id) => {
    const profileUpDated = profile.map((p) =>
      p.id === id ? { ...p, profile: !p.profile } : p,
    );
    setProfile(profileUpDated);
  };

  return (
    <ProfileContext.Provider value={{ profile, handleProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node,
};
