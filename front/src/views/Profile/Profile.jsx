import React, { useContext } from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileBase from "../../components/Profile/ProfileBase";
import LogSign from "../LogSign/LogSign";
import Context from "../../contexts/Context";

const Profile = () => {
  const { getDeveloper } = useContext(Context);
  const isLogin = () => {
    if (!getDeveloper) {
      return (
        <>
          <LogSign></LogSign>
        </>
      );
    }

    return (
      <>
        <ProfileBase></ProfileBase>
      </>
    );
  };

  return <>{isLogin()}</>;
};

export default Profile;
