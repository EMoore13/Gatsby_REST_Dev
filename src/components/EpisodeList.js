import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const EpisodeContainer = styled.div`
    flex-basis: 66%;
    float: left;

    display: flex;
    flex-direction: column;
`;

const EpisodeTile = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 3px;
    margin-bottom: 15px;

    box-sizing: border-box;
    padding: 15px 25px;
`;

const StyledTitle = styled(Link)`
    margin: 0;
    font-weight: bold;
    font-size: 30px;
    font-family: 'Quattrocentos Sans', sans-serif;
    text-decoration: none;
    color: black;
    
    transition: 0.2s ease;

    &:hover {
        color: red;
    }
`;

const TopSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BotSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ButtonLink = styled(Link)`
    padding: 5px 15px;
    background-color: blue;
    color: white;
    font-size: 12px;
    text-decoration: none;
    font-family: 'Quattrocentos Sans', sans-serif;

    transition: 0.2s ease;

    &:hover {
        background-color: red;
    }
`;

const StyledDate = styled.div`
    font-family: 'Quattrocentos Sans', sans-serif;
    font-size: 12px;
    color: black;
    margin: 0;
`;

const EpisodeList = () => (
    <StaticQuery query={graphql`
    {
        allRestApiApiFilms {
          edges {
            node {
              results {
                title
                release_date
                episode_id
              }
            }
          }
        }
      }  
    `} render={props => (
            <EpisodeContainer>
                {props.allRestApiApiFilms.edges[0].node.results.map(item => (
                    <EpisodeTile key={item.episode_id}>
                        <TopSection>
                            <StyledTitle to={`/films/${item.episode_id}`}>
                                {item.title}
                            </StyledTitle>

                            <ButtonLink to={`/films/${item.episode_id}`}>View Details</ButtonLink>
                        </TopSection>

                        <hr />

                        <BotSection>
                            <StyledDate>
                                Released: {item.release_date}
                            </StyledDate>

                            
                        </BotSection>

                    </EpisodeTile>
                ))}
            </EpisodeContainer>
        )} />
);

export default EpisodeList;