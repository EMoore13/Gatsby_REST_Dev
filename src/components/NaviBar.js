import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-family: "Quattrocento Sans";
`;

const NavLink = styled(Link)`
    font-size: 14px;
    margin: 0 5px;
    text-decoration: none;
    color: white;

    transition: 0.2s ease;

    &:hover {
        color: yellow;
    }
`;

const NaviBar = () => (
    <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/login">Login</NavLink>
    </NavContainer>
);

export default NaviBar;