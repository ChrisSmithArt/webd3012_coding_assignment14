import React from "react";
import Text from "./Text/Text";
import Label from "./Label/Label";
import Header from "./Header/Header";

export default function DevSetup() {
  return (
    <div>
      <div>
        <Header title="Development Setup"></Header>
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
