import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from 'styled-components';

import EpisodeList from '../components/EpisodeList';

const StyledDivider = styled.div`
  width: 100%;
  display: flex;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledDivider>
      <EpisodeList />
    </StyledDivider>
  </Layout>
);

export default IndexPage;
