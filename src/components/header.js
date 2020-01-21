import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';
import NaviBar from './NaviBar';

const StyledHeader = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  flex-grow: 1;
`;

const StyledTitle = styled(Link)`
  font-family: 'Archivo Black', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 30px;
  margin: 0;

  transition: 0.2s ease;

  &:hover {
    color: yellow;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerContainer>

      <TitleContainer>
        <StyledTitle to="/">
          {siteTitle}
        </StyledTitle>
      </TitleContainer>

      <NaviBar />
      
    </InnerContainer>
  </StyledHeader>
)

export default Header
