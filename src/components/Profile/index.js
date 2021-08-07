import React, { useState } from "react";
import { store } from "../../store";
import { PROFILE_TOGGLE_SHOW } from "../../store/actionTypes";
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  const profileState = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleShow = () => {
    dispatch({
      type: PROFILE_TOGGLE_SHOW,
    });
  };
  console.log(profileState);

  return (
    <>
      <h2>THIS IS PROFILE</h2>
      <button onClick={toggleShow}>TOGGLE show</button>
      {profileState.show && <div>THIS DEPENDS ON GLOBAL REDUX STATE</div>}
    </>
  );
};
