import React from "react";
import profilePicture1 from "../assets/images/display-images/profile1.png";
import profilePicture2 from "../assets/images/display-images/profile2.png";
import { user1 } from "../data/users";

export default function DisplayPicture({ chatTarget }) {
  return (
    <img
      className="display-picture-avatar"
      src={chatTarget?.uid === user1.uid ? profilePicture1 : profilePicture2}
      alt="country-calling-code"
    />
  );
}
