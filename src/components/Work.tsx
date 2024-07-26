
import React from "react";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Radio from "./Radio/Radio";
import Dropdown from "./Dropdown/Dropdown";
import Text from "./Text/Text";
import Label from "./Label/Label";

export default function Work() {
  return (
    <div>
        <Label title="Work"></Label>
        <Label title="Work Title"></Label>
        <Text content="Description"></Text>
        <div>Image/Icon</div>
        <Text content="Link"></Text>
        <Text content="Tech List"></Text>
    </div>
  );
}
