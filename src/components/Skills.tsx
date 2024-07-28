import React from "react";
import Text from "./Text/Text";
import Label from "./Label/Label";
import Header from "./Header/Header";

export default function Skills() {
  return (
    <div>
      <Header title="Skills"></Header>
      <br></br>
      <Label title="Description"></Label>
      <Text content="Below are a list of the skills I've developed in my own self-learning and during my time as a student in RRC Polytech's Full Stack Web Development Program."></Text>
      <br></br>
      <Label title="Languages/frameworks"></Label>
      <Text content="SQL, HTML, CSS, PHP, JS, TS, Ruby on Rails, Python, C#"></Text>
      <br></br>
      <Label title="Tools"></Label>
      <Text content="VSCode, PyCharm"></Text>
      <br></br>
      <Label title="Methodologies"></Label>
      <Text content="Agile Project Management, Object Oriented Programming"></Text>
      <br></br>
      <Label title="Game Development Engines"></Label>
      <Text content="Unity(C#), Godot(GDscript)"></Text>
      <br></br>
      <Label title="Design/Graphics Tools"></Label>
      <Text content="Adobe Photoshop, Krita, Blender"></Text>
    </div>
  );
}
