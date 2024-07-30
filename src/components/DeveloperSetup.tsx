import React from "react";
import Text from "./Text/Text";
import Label from "./Label/Label";
import Header from "./Header/Header";

export default function DevSetup() {
  return (
    <div>
      <Header title="Development Setup"></Header>
      <div>
        <Label title="VsCode set up"></Label>
        <Text content="For VsCode my set up is mostly set to the defaults, but I have a fair amount of extensions installed, most of which are simply for better code readability."></Text>
      </div>
      <div>
        <Label title="Terminal set up"></Label>
        <Text content="My terminal currently has the default set up, because I am not at a stage yet where I need a specialized terminal."></Text>
      </div>
      <div>
        <Label title="Preferred editor font   "></Label>
        <Text content="My preferred editor font is the default for VsCode, because it's simple and easy to read."></Text>
      </div>
    </div>
  );
}
