/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledWrapper = styled.div`
  width: 1100px;
  padding: 0 25px;
  margin: 25px auto;
`;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 15px 25px;
  box-sizing: border-box;

  background-color: black;
  color: white;
`;

const Layout = ({ children }) => {
  // Graphql Query
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledWrapper>

        <main>{children}</main>

      </StyledWrapper>
      <StyledFooter>
          © {new Date().getFullYear()}, In Development
        </StyledFooter>
    </>
  )
}

export default Layout
