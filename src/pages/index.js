import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from 'styled-components';

import EpisodeList from '../components/EpisodeList';
import SideMenu from '../components/SideMenu'

const StyledDivider = styled.div`
  width: 100%;
  display: flex;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledDivider>
      <EpisodeList />
      <SideMenu />
    </StyledDivider>
  </Layout>
);

export default IndexPage;
