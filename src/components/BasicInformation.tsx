import React from "react";


import Button from "./Button/Button";
import Card from "./Card/Card";
import Radio from "./Radio/Radio";
import Dropdown from "./Dropdown/Dropdown";
import Text from "./Text/Text";
import Label from "./Label/Label";

export default function BasicInfo() {
  return (
    <div>
    <Label title="Basic Info"></Label>
    <Text content="Some basic information about Chris"></Text>
    </div>
  );
}
