
import React from "react";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Radio from "./Radio/Radio";
import Dropdown from "./Dropdown/Dropdown";
import Text from "./Text/Text";
import Label from "./Label/Label";

export default function DevSetup() {
  return (
    <div>
        <div>
            <Label title="Development Setup"></Label>
            <Label title="VsCode set up"></Label>
            <Text content="Some information about my VsCode set up"></Text>
        </div>
        <div>            
            <Label title="Terminal set up"></Label>
            <Text content="Some information about my Terminal set up"></Text>
        </div>
        <div>         
            <Label title="Preferred editor font   "></Label>
            <Text content="Some information about my preferred editor font   "></Text>
        </div>
    </div>
  );
}
