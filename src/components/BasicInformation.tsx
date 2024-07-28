import React from "react";

import Text from "./Text/Text";
import Header from "./Header/Header";

export default function BasicInfo() {
  return (
    <div>
      <Header title="Basic Info"></Header>
      <Text
        backgroundColor={"papayawhip"}
        content="My name is Chris Smith and I am currently a student in RRC Polytech's Full Stack Web Development Program. I have a passion for building complex and modular web applications with a focus on back end database structuring."
      ></Text>
      <Text
        backgroundColor={"papayawhip"}
        content="I am a self directed and collaborative developer with great time and project management skills, looking to join an inclusive team that supports continuous learning and enables their team members to be creative."
      ></Text>
      <Text
        backgroundColor={"papayawhip"}
        content="I have a background in visual arts and animation, having a Bachelor of Fine Arts with Honours from the University of Manitoba's School of Art program."
      ></Text>
    </div>
  );
}
