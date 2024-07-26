import React from "react";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Radio from "./Radio/Radio";
import Dropdown from "./Dropdown/Dropdown";
import Text from "./Text/Text";
import Label from "./Label/Label";

export default function Resources() {
  return (
    <div>
        <Label title="Resources"></Label>
        <Label title="Resource Title"></Label>
        <div>Image/Icon</div>
        <Text content="Summary"></Text>
        <Text content="Link"></Text>
    </div>
  );
}

