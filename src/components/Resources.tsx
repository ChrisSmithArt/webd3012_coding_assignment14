import React from "react";
import Text from "./Text/Text";
import Label from "./Label/Label";
import Header from "./Header/Header";
import Img from "./Img/Img";
import Link from "./Link/Link";

export default function Resources() {
  return (
    <div>
      <Header title="Resources"></Header>
      <div class="flex">
        <div>
          <Img src="/images/VSCode.png" width="256px"></Img>
        </div>
        <div>
          <Label title="Visual Studio Code"></Label>
          <Text content="Visual Studio Code, also commonly referred to as VS Code, is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add functionality."></Text>
          <Text content="In the Stack Overflow 2023 Developer Survey, Visual Studio Code was ranked the most popular developer environment tool among 86,544 respondents, with 73.71% reporting that they use it."></Text>
          <Link href="https://code.visualstudio.com/" title="VsCode"></Link>
        </div>
      </div>
      <div class="flex">
        <div>
          <Img src="/images/Github.png" width="256px"></Img>
        </div>
        <div>
          <Label title="Github"></Label>
          <Text content="GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018."></Text>
          <Text content="It is commonly used to host open source software development projects.[8] As of January 2023, GitHub reported having over 100 million developers and more than 420 million repositories, including at least 28 million public repositories. It is the world's largest source code host as of June 2023."></Text>
          <Link href="http://www.github.com" title="Github"></Link>
        </div>
      </div>
      <div class="flex">
        <div>
          <Img src="/images/Git.png" width="256px"></Img>
        </div>
        <div>
          <Label title="Git"></Label>
          <Text content="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."></Text>
          <Text content="Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows."></Text>
          <Link href="https://git-scm.com/" title="Git"></Link>
        </div>
      </div>
      <div class="flex">
        <div>
          <Img src="/images/docker.png" width="256px"></Img>
        </div>
        <div>
          <Label title="Docker"></Label>
          <Text content="Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers."></Text>
          <Text content="The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc."></Text>
          <Link href="https://www.docker.com/" title="Docker"></Link>
        </div>
      </div>
    </div>
  );
}
