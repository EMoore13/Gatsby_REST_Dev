import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Divider = styled.div`
    width: 100%;
    display: flex;
`;

const PanelContainer = styled.div`
    flex-basis: 66%;
    display: flex;
    flex-direction: column;
`;

const EpisodePanel = styled.div`
    width: 100%;
    border-radius: 3px;
    padding: 15px 25px;
    color: black;
    background-color: white;
    box-sizing: border-box;
`;

const TitleFont = styled.h1`
    font-family: 'Quattrocento Sans';
    font-weight: bold;
    font-size: 30px;
    margin: 0;
`;

const ReleaseDate = styled.span`
    display: block;
    font-family: 'Quattrocento Sans';
    font-size: 12px;
    font-weight: 400;
    margin: 0;
`;

const CrawlText = styled.p`
    font-size: 14px;
    line-height: 18px;
    font-family: 'Quattrocento Sans', sans-serif;
    margin: 10px 0;
`;

const LittleText = styled.p`
    font-size: 10px;
    font-family: sans-serif;
    font-style: italic;
    margin: 2px 0;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;

const InfoSection = styled.div`
    flex-basis: 33%;
    padding: 5px 10px;
    box-sizing: border-box;
    font-family: 'Quattrocento Sans';
`;

const SectionHeader = styled.h4`
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 10px 0;
`;

const FilmPage = ({ pageContext }) => (
    <Layout>
        <Divider>
            <PanelContainer>
                <EpisodePanel>
                    <TitleFont>{pageContext.item.title}</TitleFont>
                    <hr />
                    <ReleaseDate>{pageContext.item.release_date}</ReleaseDate>
                    <CrawlText>{pageContext.item.opening_crawl}</CrawlText>
                    <InfoContainer>
                        {/*Characters*/}
                        <InfoSection>
                            <SectionHeader>Characters:</SectionHeader>
                            {pageContext.ppData.slice(0, 3).map(p => <p>{p.name}</p>)}
                        </InfoSection>
                        {/*Species*/}
                        <InfoSection>
                            <SectionHeader>Species:</SectionHeader>
                            {pageContext.spData.slice(0, 3).map(p => <p>{p.name}</p>)}
                        </InfoSection>
                        {/*Planets*/}
                        <InfoSection>
                            <SectionHeader>Planets:</SectionHeader>
                            {pageContext.pData.slice(0, 2).map(p => <p>{p.name}</p>)}
                        </InfoSection>
                    </InfoContainer>
                    <hr />
                    <LittleText>Directed by: {pageContext.item.director}</LittleText>
                    <LittleText>Produced by: {pageContext.item.producer}</LittleText>
                </EpisodePanel>
            </PanelContainer>
        </Divider>
    </Layout>
);

export default FilmPage;