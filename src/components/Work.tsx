import React from "react";
import Text from "./Text/Text";
import Label from "./Label/Label";
import Header from "./Header/Header";
import Img from "./Img/Img";
import Link from "./Link/Link";

export default function Work() {
  return (
    <div>
      <Header title="Work"></Header>
      <br></br>
      <div>
        <Label title="Adventure 01"></Label>
        <div class="flex">
          <div>
            <Img src="/images/Adventure01.png" width="90%"></Img>
          </div>
          <div>
            <Text content="Designed, programmed, and deployed an Adventure Game in raw HTML, CSS, and JS via Github Pages. I used knowledge gained from RRC's Web Development 1 course to create validated forms for character creation which is stored as persistent data, as well as structuring a consistent page layout and style."></Text>
            <Link
              href="https://chrissmithart.github.io/index.html"
              title="Adventure01"
            ></Link>
            <Text content="Tech List: HTML, CSS, JS"></Text>
          </div>
        </div>
      </div>

      <br></br>

      <div>
        <Label title="Pokedex App"></Label>
        <div class="flex">
          <div>
            <Text content="Designed and programmed a Pokedex Application in React, dynamically displaying images and information fetched from a Pokemon API using AJAX techniques learned from RRC's Web Development 2 course."></Text>
            <Link
              href="https://t4ryh4.csb.app/"
              title="Pokedex React App"
            ></Link>
            <Text content="Tech List: React(JSX) via CodeSandbox"></Text>
          </div>
          <div>
            <Img src="/images/Pokedex.png" width="90%"></Img>
          </div>
        </div>
      </div>

      <br></br>

      <div>
        <Label title="Web Development Tutorials"></Label>
        <div class="flex">
          <div>
            <Img src="/images/Tutorial.png" width="90%"></Img>
          </div>
          <div>
            <Text content="Managed the development of a Web Development Tutorial where I used knowledge gained from RRC's Project Management course to break down tasks and conduct this project in an Agile manner."></Text>
            <Link
              href="https://commgroupone.github.io/"
              title="Web Development Tutorial"
            ></Link>
            <Text content="Tech List: HTML, CSS, Github"></Text>
          </div>
        </div>
      </div>

      <br></br>

      <div>
        <Label title="NPCyclopedia"></Label>
        <div class="flex">
          <div>
            <Text content="Designed, programmed, and deployed a PHP based CMS, using mySQL, where I used knowledge gained from RRC's Database Management course to construct SQL queries, diagram an ERD, and structure my relational database. Additionally, I used knowledge gained from RRC's Web Development 2 course to validate and sanitise user input to avoid SQL injection. "></Text>
            <Link disabled title="Link Unavailable"></Link>
            <Text content="Tech List: PHP, Composer, Github, CSS, HTML, SQL"></Text>
          </div>
          <div>
            <Img src="/images/NPCyclopedia.png" width="90%"></Img>
          </div>
        </div>
      </div>
    </div>
  );
}
