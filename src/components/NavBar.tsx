import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";





 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>Basic Information </NavLink>
                    <NavLink to="/Work" activeStyle>Work </NavLink>
                    <NavLink to="/Skills" activeStyle>Skills </NavLink>
                    <NavLink to="/Resources" activeStyle>Resources </NavLink>
                    <NavLink to="/DeveloperSetup" activeStyle>Developer Setup </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;